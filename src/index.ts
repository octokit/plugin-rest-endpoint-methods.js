import { Octokit } from "@octokit/core";

import ENDPOINTS from "./generated/endpoints";
export { RestEndpointMethodTypes } from "./generated/parameters-and-response-types";
import { VERSION } from "./version";
import { Api } from "./types";
import { endpointsToMethods } from "./endpoints-to-methods";

export function restEndpointMethods(octokit: Octokit): Api {
  return endpointsToMethods(octokit, ENDPOINTS);
}
restEndpointMethods.VERSION = VERSION;
