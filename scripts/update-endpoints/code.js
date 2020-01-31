const { writeFileSync } = require("fs");
const { join } = require("path");

const prettier = require("prettier");
const sortKeys = require("sort-keys");

const ENDPOINTS = require("./generated/endpoints.json");

const ROUTES_PATH = join(
  __dirname,
  "..",
  "..",
  "src",
  "generated",
  "endpoints.ts"
);

const newRoutes = {};

generateRoutes();

async function generateRoutes() {
  ENDPOINTS.forEach(endpoint => {
    const scope = endpoint.scope;

    if (endpoint.isLegacy && !/^\/teams\/\{team_id\}/.test(endpoint.url)) {
      // ignore legacy endpoints with the exception of the new teams legacy methods
      return;
    }

    const isUploadReleaseAssetUrl = /^\{origin\}/.test(endpoint.url);
    if (isUploadReleaseAssetUrl) {
      endpoint.url = endpoint.url.substr("{origin}".length);
    }

    const idName = endpoint.id;
    const route = `${endpoint.method} ${endpoint.url}`;
    const endpointDefaults = {};
    const endpointDecorations = {};

    if (!newRoutes[scope]) {
      newRoutes[scope] = {};
    }

    if (endpoint.headers.length) {
      const headers = endpoint.headers.reduce((result, header) => {
        // accept header is set via mediatype
        if (header.name === "accept") {
          return result;
        }

        // ignore headers with null values. THese can be required headers that must be set by the user,
        // such as `headers['content-type']` for `octokit.repos.uploadReleaseAsset()`
        if (header.value === null) {
          return result;
        }

        if (!result) {
          result = {};
        }

        result[header.name] = header.value;
        return result;
      }, undefined);

      if (headers) {
        endpointDefaults.headers = headers;
      }
    }

    if (endpoint.previews.length) {
      endpointDefaults.mediaType = {
        previews: endpoint.previews.map(preview => preview.name)
      };
    }

    if (endpoint.renamed) {
      endpointDecorations.renamed = [
        endpoint.renamed.after.scope,
        endpoint.renamed.after.id
      ];
    }

    if (endpoint.isDeprecated && !endpoint.renamed) {
      endpointDecorations.deprecated = `octokit.${scope}.${idName}() is deprecated, see ${endpoint.documentationUrl}`;
    }

    const renamedParameters = endpoint.parameters.filter(
      parameter => !!parameter.alias
    );

    if (renamedParameters.length) {
      endpointDecorations.renamedParameters = {};

      for (const parameter of renamedParameters) {
        endpointDecorations.renamedParameters[parameter.name] = parameter.alias;
        if (!parameter.deprecated) {
          console.log(`parameter`);
          console.log(parameter);
        }
      }
    }

    if (isUploadReleaseAssetUrl) {
      endpointDefaults.baseUrl = "https://uploads.github.com";
    }

    newRoutes[scope][idName] = [route];

    if (Object.keys(endpointDecorations).length) {
      newRoutes[scope][idName].push(endpointDefaults, endpointDecorations);
    } else if (Object.keys(endpointDefaults).length) {
      newRoutes[scope][idName].push(endpointDefaults);
    }
  });

  writeFileSync(
    ROUTES_PATH,
    prettier.format(
      `import { EndpointsDefaultsAndDecorations } from "../types";
  const Endpoints: EndpointsDefaultsAndDecorations = ${JSON.stringify(
    sortKeys(newRoutes, { deep: true })
  )}
  
  export default Endpoints`,
      { parser: "typescript" }
    )
  );
  console.log(`${ROUTES_PATH} written.`);
}
