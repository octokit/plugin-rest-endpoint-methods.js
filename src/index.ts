import { Octokit } from "@octokit/core";

import endpointsByScope from "./generated/endpoints";
import { VERSION } from "./version";
import { Api } from "./types";
import { registerEndpoints } from "./register-endpoints";

/**
 * This plugin is a 1:1 copy of internal @octokit/rest plugins. The primary
 * goal is to rebuild @octokit/rest on top of @octokit/core. Once that is
 * done, we will remove the registerEndpoints methods and return the methods
 * directly as with the other plugins. At that point we will also remove the
 * legacy workarounds and deprecations.
 *
 * See the plan at
 * https://github.com/octokit/plugin-rest-endpoint-methods.js/pull/1
 */
export function restEndpointMethods(octokit: Octokit): Api {
  // @ts-ignore
  octokit.registerEndpoints = registerEndpoints.bind(null, octokit);

  // Aliasing scopes for backward compatibility
  // See https://github.com/octokit/rest.js/pull/1134
  // @ts-ignore
  registerEndpoints(
    octokit,
    Object.assign(endpointsByScope, {
      gitdata: endpointsByScope.git,
      authorization: endpointsByScope.oauthAuthorizations,
      pullRequests: endpointsByScope.pulls
    })
  );

  return {} as Api;
}
restEndpointMethods.VERSION = VERSION;
