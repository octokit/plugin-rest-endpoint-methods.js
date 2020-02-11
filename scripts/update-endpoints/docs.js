const { join } = require("path");

const { outputFileSync } = require("fs-extra");
const prettier = require("prettier");
const marked = require("marked");

const ENDPOINTS = require("./generated/endpoints.json");
const WORKAROUNDS = require("./workarounds");

const README_PATH = join(__dirname, "..", "..", "README.md");

const newRoutes = {};

generateRoutes();

async function generateRoutes() {
  const endpoints = ENDPOINTS.concat(WORKAROUNDS);

  for (const endpoint of endpoints) {
    const path = `docs/${endpoint.scope}/${endpoint.id}.md`;
    outputFileSync(path, template(endpoint));
    console.log(`${path} written`);
  }
}

function template(endpoint) {
  const deprecationNotice = endpoint.isDeprecated
    ? "**This method is deprecated.**"
    : "";
  const renameNotice = endpoint.renamed
    ? `**Deprecated:** This method has been renamed to ${endpoint.renamed.after.scope}.${endpoint.renamed.after.id}`
    : "";

  const parameterRows = endpoint.parameters.map(
    param =>
      `<tr><td>${param.name}</td><td>${param.required ? "yes" : "no"}</td><td>

${param.description}

</td></tr>`
  );

  const requiredParameterNames = endpoint.parameters
    .filter(parameter => parameter.required)
    .map(parameter => parameter.name);
  const example =
    `octokit.${endpoint.scope}.${endpoint.id}` +
    (requiredParameterNames.length
      ? `({
        ${requiredParameterNames.join(",\n")}
      })`
      : "()");

  const content = `
# ${endpoint.name}

${deprecationNotice}

${renameNotice}

${endpoint.description}

\`\`\`js
${example}
\`\`\`

## Parameters

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>required</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    ${parameterRows.join("\n")}
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).`;

  return prettier.format(content, {
    parser: "markdown"
  });
}
