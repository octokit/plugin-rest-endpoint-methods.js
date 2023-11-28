import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { format } from "prettier";
import sortKeys from "sort-keys";

const parentDir = new URL(".", import.meta.url);
const ENDPOINTS = JSON.parse(
  readFileSync(new URL("generated/endpoints.json", parentDir)).toString(),
);
import { isDeprecated } from "./util.mjs";

const ROUTES_PATH = join(
  fileURLToPath(parentDir),
  "..",
  "..",
  "src",
  "generated",
  "endpoints.ts",
);

const newRoutes = {};

generateRoutes();

async function generateRoutes() {
  ENDPOINTS.forEach((endpoint) => {
    if (isDeprecated(endpoint)) return false;

    const scope = endpoint.scope;

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
        // such as `headers['content-type']` for `octokit.rest.repos.uploadReleaseAsset()`
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
        previews: endpoint.previews.map((preview) => preview.name),
      };
    }

    if (endpoint.renamed) {
      endpointDecorations.renamed = [
        endpoint.renamed.after.scope,
        endpoint.renamed.after.id,
      ];
    }

    if (endpoint.isDeprecated && !endpoint.renamed) {
      endpointDecorations.deprecated = `octokit.rest.${scope}.${idName}() is deprecated, see ${endpoint.documentationUrl}`;
    }

    const renamedParameters = endpoint.parameters.filter(
      (parameter) => !!parameter.alias,
    );

    if (renamedParameters.length) {
      endpointDecorations.renamedParameters = {};

      for (const parameter of renamedParameters) {
        endpointDecorations.renamedParameters[parameter.name] = parameter.alias;
      }
    }

    const mapToDataParameter = endpoint.parameters.find((parameter) => {
      return parameter.mapToData && parameter.name !== "data";
    });

    if (mapToDataParameter) {
      endpointDecorations.mapToData = mapToDataParameter.name;
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
    await format(
      `import type { EndpointsDefaultsAndDecorations } from "../types.js";
  const Endpoints: EndpointsDefaultsAndDecorations = ${JSON.stringify(
    sortKeys(newRoutes, { deep: true }),
  )}
  
  export default Endpoints`,
      { parser: "typescript" },
    ),
  );
  console.log(`${ROUTES_PATH} written.`);
}
