import { RestEndpointMethods } from "./generated/rest-endpoint-methods-types";

export type Api = {
  registerEndpoints: (endpoints: any) => void;
} & RestEndpointMethods;
