import { EndpointOptions } from "@octokit/types";

import { RestEndpointMethods } from "./generated/rest-endpoint-methods-types";

type EndpointMethodsObject = {
  [scope: string]: EndpointOptions | EndpointMethodsObject;
};

export type Api = {
  registerEndpoints: (endpoints: EndpointMethodsObject) => void;
  rest: RestEndpointMethods;
};
