const { writeFileSync } = require("fs");
const { join: pathJoin } = require("path");

const upperFirst = require("lodash.upperfirst");
const camelCase = require("lodash.camelcase");
const set = require("lodash.set");
const TypeWriter = require("@gimenete/type-writer");
const prettier = require("prettier");
const { stringToJsdocComment } = require("string-to-jsdoc-comment");
const sortKeys = require("sort-keys");

const ENDPOINTS = require("./generated/endpoints.json");
const { isDeprecated } = require("./util");

const typeMap = {
  integer: "number",
  "integer[]": "number[]"
};

function parameterize(definition) {
  if (definition === null) {
    return {};
  }

  const key = definition.name;
  const type = typeMap[definition.type] || definition.type;
  const enums = definition.enum
    ? definition.enum.map(JSON.stringify).join("|")
    : null;

  return {
    name: pascalcase(key),
    key: key,
    required: definition.required,
    type: enums || type,
    alias: definition.alias,
    deprecated: definition.deprecated,
    allowNull: definition.allowNull,
    jsdoc: stringToJsdocComment(definition.description)
  };
}

function pascalcase(string) {
  return upperFirst(camelCase(string));
}

function toCombineParams(params, param) {
  return params.concat(parameterize(param));
}

function toParamAlias(param, i, params) {
  if (!param.alias) {
    return param;
  }

  const actualParam = params.find(({ key }) => key === param.alias);
  param.required = !param.deprecated && actualParam.required;
  param.type = actualParam.type;
  return param;
}

function toDeprecated(params, deprecated) {
  const deprecatedParam = Object.assign({}, deprecated.newParam, {
    key: deprecated.name,
    name: pascalcase(deprecated.name),
    jsdoc: deprecated.jsdoc
  });

  return params
    .filter(param => param.key !== deprecated.newParam.name)
    .concat(deprecatedParam)
    .sort((a, b) => {
      if (a.key > b.key) {
        return 1;
      }
      if (a.key < b.key) {
        return -1;
      }
      return 0;
    });
}

generateTypes();

async function generateTypes() {
  const typeWriter = new TypeWriter();

  const ROUTES = await getRoutes();

  const childParams = {};
  const namespaces = Object.keys(ROUTES).reduce((namespaces, namespace) => {
    const methods = Object.keys(ROUTES[namespace]).reduce(
      (methods, methodName) => {
        const entry = ROUTES[namespace][methodName];
        const namespacedParamsName = pascalcase(
          `${namespace}.${methodName}.Params`
        );
        let responseType = "AnyResponse";
        if (entry.responses) {
          const typeName = typeWriter.add(entry.responses, {
            rootTypeName: pascalcase(`${namespace}.${methodName}.Response`)
          });
          responseType = "OctokitResponse<" + typeName + ">";
        }

        // find aliased required parameters
        const deprecatedParameters = Object.keys(entry.params)
          .map(name => {
            const param = entry.params[name];
            if (!param.deprecated) {
              return;
            }

            const newParamName = entry.params[name].alias;
            const newParam = Object.assign(
              {
                type: entry.params[name].type
              },
              entry.params[newParamName],
              {
                name: newParamName
              }
            );

            const description = [
              param.description,
              newParamName
                ? `@deprecated "${name}" parameter renamed to "${newParamName}"`
                : `@deprecated "${name}" parameter has been deprecated and will be removed in future`
            ]
              .filter(Boolean)
              .join("\n");

            return {
              newParam:
                newParam &&
                Object.assign({}, newParam, {
                  type: typeMap[newParam.type] || newParam.type
                }),
              name,
              jsdoc: stringToJsdocComment(description)
            };
          })
          .filter(Boolean);

        const params = Object.keys(entry.params)
          .map(name => Object.assign({ name }, entry.params[name]))
          .reduce(toCombineParams, [])
          .map(toParamAlias)
          // handle "object" & "object[]" types
          .map(param => {
            if (param.deprecated) {
              return;
            }

            if (param.type === "object" || param.type === "object[]") {
              const childParamsName = pascalcase(
                `${namespacedParamsName}.${param.key}`
              );
              param.type = param.type.replace("object", childParamsName);

              if (!childParams[childParamsName]) {
                childParams[childParamsName] = {};
              }
            }

            if (!/\./.test(param.key)) {
              return param;
            }

            const childKey = param.key.split(".").pop();
            const parentKey = param.key.replace(/\.[^.]+$/, "");

            param.key = childKey;

            const childParamsName = pascalcase(
              `${namespacedParamsName}.${parentKey}`
            );
            set(childParams, `${childParamsName}.${childKey}`, param);
          })
          .filter(Boolean);

        // prepare functions to accept multiple parameter types in order to support deprecations
        // https://github.com/octokit/rest.js/issues/1317
        const hasParams = params.length > 0;
        const paramTypes = [
          {
            type: hasParams ? namespacedParamsName : "EmptyParams",
            params,
            hasParams
          }
        ];

        deprecatedParameters.forEach(param => {
          paramTypes.unshift({
            type: pascalcase(
              `${namespacedParamsName}.deprecated.${param.name}`
            ),
            params: toDeprecated(params, param),
            hasParams: true
          });
        });

        const description = [
          entry.description,
          entry.deprecated && `@deprecated ${entry.deprecated}`
        ]
          .filter(Boolean)
          .join("\n");

        return methods.concat({
          method: methodName,
          responseType,
          jsdoc: stringToJsdocComment(description),
          paramTypes
        });
      },
      []
    );

    return namespaces.concat({
      namespace: camelCase(namespace),
      methods
    });
  }, []);

  const responseTypes = typeWriter.generate("typescript");
  const paramTypes = [];

  for (const namespace of namespaces) {
    for (const method of namespace.methods) {
      for (const paramType of method.paramTypes) {
        if (!paramType.hasParams) continue;
        const params = paramType.params.map(param => {
          const required = param.required ? "" : "?";
          const allowNull = param.allowNull ? " | null" : "";
          const key = /-/.test(param.key) ? `"${param.key}"` : param.key;
          return [param.jsdoc, `${key}${required}: ${param.type}${allowNull}`]
            .filter(Boolean)
            .join("\n");
        });
        paramTypes.push(`export type ${paramType.type} = {
          ${params.join("\n")}
        }`);
      }
    }
  }

  paramTypes.push("\n// child param types");

  for (const [name, paramsMap] of Object.entries(childParams)) {
    const params = Object.values(paramsMap).map(param => {
      const required = param.required ? "" : "?";
      const allowNull = param.allowNull ? " | null" : "";
      const key = /-/.test(param.key) ? `"${param.key}"` : param.key;
      return [param.jsdoc, `${key}${required}: ${param.type}${allowNull}`]
        .filter(Boolean)
        .join("\n");
    });
    paramTypes.push(`export type ${name} = {
      ${params.join("\n")}
    }`);
  }

  const RestEndpointNamespaces = [];
  for (const namespace of namespaces) {
    const namespaceMethods = [];
    for (const method of namespace.methods) {
      const params = method.paramTypes.map(({ type }) => {
        return `(params?: RequestParameters & ${type}): Promise<${method.responseType}>;`;
      });
      namespaceMethods.push(
        [
          method.jsdoc,
          `${method.method}: {
          ${params.join("\n")}          

          endpoint: EndpointInterface;
        }`
        ].join("\n")
      );
    }

    RestEndpointNamespaces.push(`${namespace.namespace}: {
      ${namespaceMethods.join("\n")}
    }`);
  }

  const source = prettier.format(
    [
      `import {
  EndpointInterface,
  RequestParameters,
  OctokitResponse
} from "@octokit/types";

type AnyResponse = OctokitResponse<any>;
type EmptyParams = {};`,
      "\n// response types",
      responseTypes,
      "\n// param types",
      paramTypes.join("\n"),
      `\n\nexport type RestEndpointMethods = {
        ${RestEndpointNamespaces.join("\n")}
      }`
    ].join("\n"),
    {
      parser: "typescript"
    }
  );

  const definitionFilePath = pathJoin(
    process.cwd(),
    "src",
    "generated",
    "types.ts"
  );

  writeFileSync(definitionFilePath, source, "utf8");
  console.log(`Types written to ${definitionFilePath}`);
}

async function getRoutes() {
  const newRoutes = {};

  ENDPOINTS.forEach(endpoint => {
    if (isDeprecated(endpoint)) return;

    const scope = endpoint.scope;

    if (!newRoutes[scope]) {
      newRoutes[scope] = {};
    }

    const idName = endpoint.id;
    const url = endpoint.url.toLowerCase().replace(/\{(\w+)\}/g, ":$1");

    // new route
    newRoutes[scope][idName] = {
      method: endpoint.method,
      url,
      description: endpoint.description,
      deprecated: newRoutes[scope][idName]
        ? newRoutes[scope][idName].deprecated
        : undefined,
      params: endpoint.parameters.reduce((result, param) => {
        // "origin" is a URL parameter only relevant for octokit.repos.uploadReleaseAsset()
        // We remove it and set a default for `baseUrl`, which is a special default parameter
        if (param.name === "origin") {
          return result;
        }

        result[param.name] = {
          type: param.type,
          description:
            param.description === `${param.name} parameter`
              ? ""
              : param.description
        };
        if (param.allowNull) {
          result[param.name].allowNull = true;
        }
        if (param.required) {
          result[param.name].required = true;
        }
        if (param.mapToData) {
          result[param.name].mapTo = "data";
        }
        if (param.enum) {
          result[param.name].enum = param.enum;
        }
        if (param.validation) {
          result[param.name].validation = param.validation;
        }
        if (param.deprecated) {
          result[param.name].deprecated = true;

          if (param.alias) {
            result[param.name].alias = param.alias;
            result[param.name].type = result[param.alias].type;
          } else {
            result[param.name].type = param.type;
            result[param.name].description = param.description;
          }
        }
        if (
          typeof param.description === "string" &&
          param.description.match(/deprecated/i)
        ) {
          result[param.name].deprecated = true;
        }

        return result;
      }, {}),
      responses:
        endpoint.responses.length && endpoint.responses[0].examples
          ? endpoint.responses[0].examples.map(example =>
              JSON.parse(example.data)
            )
          : undefined
    };

    // add required headers as parameters
    const requiredHeaders = endpoint.headers.filter(header => {
      // if value is set, we pass the header with its expected value automatically
      if (header.value) {
        return false;
      }

      return header.required;
    });

    if (requiredHeaders.length) {
      newRoutes[scope][idName].params.headers = {
        type: "object",
        required: true
      };
      for (const header of requiredHeaders) {
        // Content-Length header is set automatically
        if (header.name === "content-length") {
          continue;
        }

        newRoutes[scope][idName].params[`headers.${header.name}`] = {
          type: "string",
          required: true
        };
      }
    }

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
