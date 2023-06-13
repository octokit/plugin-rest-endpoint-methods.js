import type { Octokit } from "@octokit/core";

export type { RestEndpointMethodTypes } from "./generated/parameters-and-response-types";
import { VERSION } from "./version";
import type { Api } from "./types";
import { endpointsToMethods } from "./endpoints-to-methods";

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
