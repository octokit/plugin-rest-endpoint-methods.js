import { Octokit } from "@octokit/core";
import {
  EndpointOptions,
  RequestParameters,
  RequestMethod,
  Route,
  Url,
} from "@octokit/types";
import { EndpointsDefaultsAndDecorations, EndpointDecorations } from "./types";
import { RestEndpointMethods } from "./generated/method-types";

type EndpointMethods = {
  [methodName: string]: typeof Octokit.prototype.request;
};

export function endpointsToMethods(
  octokit: Octokit,
  endpointsMap: EndpointsDefaultsAndDecorations
) {
  const newMethods = {} as { [key: string]: object };

  for (const [scope, endpoints] of Object.entries(endpointsMap)) {
    for (const [methodName, endpoint] of Object.entries(endpoints)) {
      const [route, defaults, decorations] = endpoint;
      const [method, url] = route.split(/ /) as [RequestMethod, Url];
      const endpointDefaults: EndpointOptions = Object.assign(
        { method, url },
        defaults
      );

      if (!newMethods[scope]) {
        newMethods[scope] = {};
      }

      const scopeMethods = newMethods[scope] as EndpointMethods;

      if (decorations) {
        scopeMethods[methodName] = decorate(
          octokit,
          scope,
          methodName,
          endpointDefaults,
          decorations
        );
        continue;
      }

      scopeMethods[methodName] = octokit.request.defaults(endpointDefaults);
    }
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

    // NOTE: there are currently no deprecations. But we keep the code
    //       below for future reference
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
        // There is currently no deprecated parameter that is optional,
        // so we never hit the else branch below at this point.
        /* istanbul ignore else */
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
