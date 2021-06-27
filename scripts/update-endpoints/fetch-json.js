const { writeFileSync } = require("fs");
const path = require("path");

const graphql = require("github-openapi-graphql-query");
const prettier = require("prettier");

if (!process.env.VERSION) {
  throw new Error(`VERSION environment variable must be set`);
}

const version = process.env.VERSION.replace(/^v/, "");

const QUERY = `
  query ($version: String!, $ignoreChangesBefore: String!) {
    endpoints(version: $version, ignoreChangesBefore: $ignoreChangesBefore, filter: { isGithubCloudOnly: false }) {
      name
      scope(format: CAMELCASE)
      id(format: CAMELCASE)
      method
      url
      isDeprecated
      deprecationDate
      description
      documentationUrl
      previews(required: true) {
        name
      }
      headers {
        name
        value
        required
      }
      parameters {
        name
        description
        in
        type
        required
        enum
        allowNull
        mapToData
        validation
        alias
        deprecated
      }
      responses {
        code
        description
        examples {
          data
        }
      }
      renamed {
        before {
          scope(format: CAMELCASE)
          id(format: CAMELCASE)
        }
        after {
          scope(format: CAMELCASE)
          id(format: CAMELCASE)
        }
        date
        note
      }
    }
  }`;

main();

async function main() {
  const {
    data: { endpoints },
  } = await graphql(QUERY, {
    version,
    ignoreChangesBefore: "2020-06-10",
  });

  writeFileSync(
    path.resolve(__dirname, "generated", "endpoints.json"),
    prettier.format(JSON.stringify(endpoints), {
      parser: "json",
    })
  );
}
