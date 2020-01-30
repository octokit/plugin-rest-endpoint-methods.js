import { Route, RequestParameters } from "@octokit/types";

import { RestEndpointMethods } from "./generated/rest-endpoint-methods-types";

export type Api = RestEndpointMethods;

export type EndpointDecorations = {
  deprecated?: string;
  renamed?: [string, string];
  renamedParameters?: {
    [name: string]: string;
  };
};

export type EndpointsDefaultsAndDecorations = {
  [scope: string]: {
    [methodName: string]: [Route, RequestParameters?, EndpointDecorations?];
  };
};
