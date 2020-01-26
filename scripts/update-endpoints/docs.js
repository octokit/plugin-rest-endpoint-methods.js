const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const prettier = require("prettier");

const ENDPOINTS = require("./generated/endpoints.json");
const WORKAROUNDS = require("./workarounds");

const README_PATH = join(__dirname, "..", "..", "README.md");

const newRoutes = {};

generateRoutes();

async function generateRoutes() {
  const examples = ENDPOINTS.concat(WORKAROUNDS)
    .map(endpoint => {
      if (endpoint.isLegacy && !/^\/teams\/\{team_id\}/.test(endpoint.url)) {
        // ignore legacy endpoints with the exception of the new teams legacy methods
        return;
      }

      const paramNames = endpoint.parameters
        .filter(parameter => !parameter.alias)
        .filter(parameter => !parameter.name.includes("."))
        .filter(parameter => !["per_page", "page"].includes(parameter.name))
        .map(parameter => parameter.name)
        .join(", ");

      const comment = endpoint.renamed
        ? `// DEPRECATED: octokit.${endpoint.renamed.before.scope}.${endpoint.renamed.before.id}() has been renamed to octokit.${endpoint.renamed.after.scope}.${endpoint.renamed.after.id}()`
        : `// ${endpoint.documentationUrl}`;

      return `${comment}
octokit.${endpoint.scope}.${endpoint.id}(${
        paramNames ? `{ ${paramNames} }` : ""
      });`;
    })
    .join("\n\n");

  const currentContent = readFileSync(README_PATH, "utf8");
  const newContent = currentContent.replace(
    /const octokit = new MyOctokit\({ auth: "secret123" }\);[\s\S]*\`/,
    `const octokit = new MyOctokit({ auth: "secret123" });

${prettier.format(examples, {
  parser: "babel"
})}\`\`\``
  );

  writeFileSync(README_PATH, newContent);
  console.log(`${README_PATH} updated.`);
}
