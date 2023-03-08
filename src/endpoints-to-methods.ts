import { Octokit } from "@octokit/core";
import { EndpointOptions, RequestParameters, Route } from "@octokit/types";
import { EndpointDecorations } from "./types";
import { RestEndpointMethods } from "./generated/method-types";
import ENDPOINTS from "./generated/endpoints";

const enpointMethodsMap = new Map();
for (const [scope, endpoints] of Object.entries(ENDPOINTS)) {
  for (const [methodName, endpoint] of Object.entries(endpoints)) {
    const [route, defaults, decorations] = endpoint;
    const [method, url] = route.split(/ /);
    const endpointDefaults = Object.assign(
      {
        method,
        url,
      },
      defaults
    );

    if (!enpointMethodsMap.has(scope)) {
      enpointMethodsMap.set(scope, new Map());
    }

    enpointMethodsMap.get(scope).set(methodName, {
      scope,
      methodName,
      endpointDefaults,
      decorations,
    });
  }
}

type ProxyTarget = {
  octokit: Octokit;
  scope: string;
  cache: Record<string, (...args: any[]) => any>;
};

const handler = {
  get({ octokit, scope, cache }: ProxyTarget, methodName: string) {
    if (cache[methodName]) {
      return cache[methodName];
    }

    const { decorations, endpointDefaults } = enpointMethodsMap
      .get(scope)
      .get(methodName);

    if (decorations) {
      cache[methodName] = decorate(
        octokit,
        scope,
        methodName,
        endpointDefaults,
        decorations
      );
    } else {
      cache[methodName] = octokit.request.defaults(endpointDefaults);
    }

    return cache[methodName];
  },
};

export function endpointsToMethods(octokit: Octokit): RestEndpointMethods {
  const newMethods = {} as { [key: string]: object };

  for (const scope of enpointMethodsMap.keys()) {
    newMethods[scope] = new Proxy({ octokit, scope, cache: {} }, handler);
  }

  return newMethods as RestEndpointMethods;
}

function decorate(
  octokit: Octokit,
  scope: string,
  methodName: string,
  defaults: EndpointOptions,
  decorations: EndpointDecorations
) {
  const requestWithDefaults = octokit.request.defaults(defaults);

  /* istanbul ignore next */
  function withDecorations(
    ...args: [Route, RequestParameters?] | [EndpointOptions]
  ) {
    // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
    let options = requestWithDefaults.endpoint.merge(...args);

    // There are currently no other decorations than `.mapToData`
    if (decorations.mapToData) {
      options = Object.assign({}, options, {
        data: options[decorations.mapToData],
        [decorations.mapToData]: undefined,
      });
      return requestWithDefaults(options);
    }

    if (decorations.renamed) {
      const [newScope, newMethodName] = decorations.renamed;
      octokit.log.warn(
        `octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`
      );
    }
    if (decorations.deprecated) {
      octokit.log.warn(decorations.deprecated);
    }

    if (decorations.renamedParameters) {
      // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
      const options = requestWithDefaults.endpoint.merge(...args);

      for (const [name, alias] of Object.entries(
        decorations.renamedParameters
      )) {
        if (name in options) {
          octokit.log.warn(
            `"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`
          );
          if (!(alias in options)) {
            options[alias] = options[name];
          }
          delete options[name];
        }
      }
      return requestWithDefaults(options);
    }

    // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
    return requestWithDefaults(...args);
  }
  return Object.assign(withDecorations, requestWithDefaults);
}
