import type { Octokit } from "@octokit/core";
import type { EndpointOptions, RequestParameters, Route } from "@octokit/types";
import ENDPOINTS from "./generated/endpoints";
import type { RestEndpointMethods } from "./generated/method-types";
import type { EndpointDecorations } from "./types";

// The following code was refactored in: https://github.com/octokit/plugin-rest-endpoint-methods.js/pull/622
// to optimise the runtime performance of Octokit initialization.
//
// This optimization involves two key changes:
// 1. Pre-Computation: The endpoint methods are pre-computed once at module load
//    time instead of each invocation of `endpointsToMethods()`.
// 2. Lazy initialization and caching: We use a Proxy for each scope to only
//    initialize methods that are actually called. This reduces runtime overhead
//    as the initialization involves deep merging of objects. The initialized
//    methods are then cached for future use.

const endpointMethodsMap = new Map();
for (const [scope, endpoints] of Object.entries(ENDPOINTS)) {
  for (const [methodName, endpoint] of Object.entries(endpoints)) {
    const [route, defaults, decorations] = endpoint;
    const [method, url] = route.split(/ /);
    const endpointDefaults = Object.assign(
      {
        method,
        url,
      },
      defaults,
    );

    if (!endpointMethodsMap.has(scope)) {
      endpointMethodsMap.set(scope, new Map());
    }

    endpointMethodsMap.get(scope).set(methodName, {
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
  has({ scope }: ProxyTarget, methodName: string) {
    return endpointMethodsMap.get(scope).has(methodName);
  },
  getOwnPropertyDescriptor(target: ProxyTarget, methodName: string) {
    return {
      value: this.get(target, methodName), // ensures method is in the cache
      configurable: true,
      writable: true,
      enumerable: true,
    };
  },
  defineProperty(
    target: ProxyTarget,
    methodName: string,
    descriptor: PropertyDescriptor,
  ) {
    Object.defineProperty(target.cache, methodName, descriptor);
    return true;
  },
  deleteProperty(target: ProxyTarget, methodName: string) {
    delete target.cache[methodName];
    return true;
  },
  ownKeys({ scope }: ProxyTarget) {
    return [...endpointMethodsMap.get(scope).keys()];
  },
  set(target: ProxyTarget, methodName: string, value: any) {
    return (target.cache[methodName] = value);
  },
  get({ octokit, scope, cache }: ProxyTarget, methodName: string) {
    if (cache[methodName]) {
      return cache[methodName];
    }

    const method = endpointMethodsMap.get(scope).get(methodName);
    if (!method) {
      return undefined;
    }

    const { endpointDefaults, decorations } = method;

    if (decorations) {
      cache[methodName] = decorate(
        octokit,
        scope,
        methodName,
        endpointDefaults,
        decorations,
      );
    } else {
      cache[methodName] = octokit.request.defaults(endpointDefaults);
    }

    return cache[methodName];
  },
};

export function endpointsToMethods(octokit: Octokit): RestEndpointMethods {
  const newMethods = {} as { [key: string]: object };

  for (const scope of endpointMethodsMap.keys()) {
    newMethods[scope] = new Proxy({ octokit, scope, cache: {} }, handler);
  }

  return newMethods as RestEndpointMethods;
}

function decorate(
  octokit: Octokit,
  scope: string,
  methodName: string,
  defaults: EndpointOptions,
  decorations: EndpointDecorations,
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
        `octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`,
      );
    }
    if (decorations.deprecated) {
      octokit.log.warn(decorations.deprecated);
    }

    if (decorations.renamedParameters) {
      // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
      const options = requestWithDefaults.endpoint.merge(...args);

      for (const [name, alias] of Object.entries(
        decorations.renamedParameters,
      )) {
        if (name in options) {
          octokit.log.warn(
            `"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`,
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
