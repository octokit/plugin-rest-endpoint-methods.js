import type { Octokit } from "@octokit/core";

export type { RestEndpointMethodTypes } from "./generated/parameters-and-response-types.js";
import { VERSION } from "./version.js";
import type { Api } from "./types.js";
import { endpointsToMethods } from "./endpoints-to-methods.js";

// Export the type for downstream users in order to fix a TypeScript error
// The inferred type of 'Octokit' cannot be named without a reference to '../node_modules/@octokit/plugin-rest-endpoint-methods/dist-types/types.js'. This is likely not portable. A type annotation is necessary.
export type { Api };

export function restEndpointMethods(octokit: Octokit): Api {
  const api = endpointsToMethods(octokit);
  return {
    rest: api,
  };
}
restEndpointMethods.VERSION = VERSION;

export function legacyRestEndpointMethods(octokit: Octokit): Api["rest"] & Api {
  const api = endpointsToMethods(octokit);
  return {
    ...api,
    rest: api,
  };
}
legacyRestEndpointMethods.VERSION = VERSION;
