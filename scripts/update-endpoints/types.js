const { writeFileSync } = require("fs");
const { join: pathJoin } = require("path");

const camelCase = require("lodash.camelcase");
const prettier = require("prettier");
const { stringToJsdocComment } = require("string-to-jsdoc-comment");
const sortKeys = require("sort-keys");

const ENDPOINTS = require("./generated/endpoints.json");
const { isDeprecated } = require("./util");

generateTypes();

async function generateTypes() {
  const ROUTES = await getRoutes();

  const namespaces = Object.keys(ROUTES).reduce((namespaces, namespace) => {
    const methods = Object.keys(ROUTES[namespace]).reduce(
      (methods, methodName) => {
        const entry = ROUTES[namespace][methodName];

        const description = [
          entry.description,
          entry.deprecated && `@deprecated ${entry.deprecated}`,
        ]
          .filter(Boolean)
          .join("\n");

        return methods.concat({
          name: methodName,
          route: `${entry.method} ${entry.url}`,
          hasRequiredPreviews: entry.hasRequiredPreviews,
          jsdoc: stringToJsdocComment(description),
        });
      },
      []
    );

    return namespaces.concat({
      namespace: camelCase(namespace),
      methods,
    });
  }, []);

  const RestEndpointMethodParameterAndResponseTypes = [];
  for (const namespace of namespaces) {
    const namespaceMethods = [];
    for (const method of namespace.methods) {
      namespaceMethods.push(
        `${method.name}: {
          parameters: RequestParameters & Omit<Endpoints["${method.route}"]["parameters"], "baseUrl" | "headers" | "mediaType">,
          response: Endpoints["${method.route}"]["response"]
        }`
      );
    }

    RestEndpointMethodParameterAndResponseTypes.push(`${namespace.namespace}: {
      ${namespaceMethods.join("\n")}
    }`);
  }

  const RestEndpointMethodNamespaceTypes = [];
  for (const namespace of namespaces) {
    const namespaceMethods = [];
    for (const method of namespace.methods) {
      namespaceMethods.push(
        [
          method.jsdoc,
          `${method.name}: {
          (params?: RestEndpointMethodTypes["${namespace.namespace}"]["${method.name}"]["parameters"]): Promise<RestEndpointMethodTypes["${namespace.namespace}"]["${method.name}"]["response"]>
          defaults: RequestInterface["defaults"];
          endpoint: EndpointInterface<{ url: string }>;
        }`,
        ].join("\n")
      );
    }

    RestEndpointMethodNamespaceTypes.push(`${namespace.namespace}: {
      ${namespaceMethods.join("\n")}
    }`);
  }

  const methodTypesSource = prettier.format(
    [
      `import { EndpointInterface, RequestInterface } from "@octokit/types";`,
      `import { RestEndpointMethodTypes } from "./parameters-and-response-types";`,
      "",
      `export type RestEndpointMethods = {
        ${RestEndpointMethodNamespaceTypes.join("\n")}
      }`,
    ].join("\n"),
    {
      parser: "typescript",
    }
  );
  const parametersAndResponsesTypes = prettier.format(
    [
      `import { Endpoints, RequestParameters } from "@octokit/types";`,
      "",
      `export type RestEndpointMethodTypes = {
        ${RestEndpointMethodParameterAndResponseTypes.join("\n")}
      }`,
    ].join("\n"),
    {
      parser: "typescript",
    }
  );

  const methodTypesFilePath = pathJoin(
    process.cwd(),
    "src",
    "generated",
    "method-types.ts"
  );

  writeFileSync(methodTypesFilePath, methodTypesSource, "utf8");
  console.log(`Types written to ${methodTypesFilePath}`);

  const parametersAndResponseFilePath = pathJoin(
    process.cwd(),
    "src",
    "generated",
    "parameters-and-response-types.ts"
  );

  writeFileSync(
    parametersAndResponseFilePath,
    parametersAndResponsesTypes,
    "utf8"
  );
  console.log(`Types written to ${parametersAndResponseFilePath}`);
}

async function getRoutes() {
  const newRoutes = {};

  ENDPOINTS.forEach((endpoint) => {
    if (isDeprecated(endpoint)) return;

    const scope = endpoint.scope;

    if (!newRoutes[scope]) {
      newRoutes[scope] = {};
    }

    const idName = endpoint.id;
    const url = endpoint.url
      .toLowerCase()
      // stecial case for "Upload a release asset": remove ":origin" prefix
      .replace(/^:origin/, "");

    // new route
    newRoutes[scope][idName] = {
      method: endpoint.method,
      url,
      description: endpoint.description,
      hasRequiredPreviews: !!endpoint.previews.length,
      deprecated: newRoutes[scope][idName]
        ? newRoutes[scope][idName].deprecated
        : undefined,
    };

    if (endpoint.renamed) {
      const { before, after } = endpoint.renamed;
      if (!newRoutes[before.scope]) {
        newRoutes[before.scope] = {};
      }

      if (!newRoutes[before.scope][before.id]) {
        newRoutes[before.scope][before.id] = newRoutes[scope][idName];
      }

      newRoutes[before.scope][
        before.id
      ].deprecated = `octokit.${before.scope}.${before.id}() has been renamed to octokit.${after.scope}.${after.id}() (${endpoint.renamed.date})`;
    }

    if (endpoint.isDeprecated) {
      newRoutes[scope][
        idName
      ].deprecated = `octokit.${scope}.${idName}() is deprecated, see ${endpoint.documentationUrl}`;
    }
  });

  return sortKeys(newRoutes, { deep: true });
}
