const { writeFileSync } = require("fs");
const path = require("path");

const { graphql } = require("@octokit/graphql");
const prettier = require("prettier");

if (!process.env.VERSION) {
  throw new Error(`VERSION environment variable must be set`);
}

const QUERY = `
  query ($version: String!, $ignoreChangesBefore: String!) {
    endpoints(version: $version, ignoreChangesBefore: $ignoreChangesBefore, filter: { isLegacy: false, isGithubCloudOnly: false }) {
      name
      scope(format: CAMELCASE)
      id(format: CAMELCASE)
      method
      url
      isDeprecated
      isLegacy
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
  const { endpoints } = await graphql(QUERY, {
    url: "https://octokit-routes-graphql-server.now.sh/",
    version: process.env.VERSION,
    ignoreChangesBefore: "2020-02-01"
  });

  writeFileSync(
    path.resolve(__dirname, "generated", "endpoints.json"),
    prettier.format(JSON.stringify(endpoints), {
      parser: "json"
    })
  );
}
