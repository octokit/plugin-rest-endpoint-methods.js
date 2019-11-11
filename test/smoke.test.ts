import { restEndpointMethods } from "../src";

describe("Smoke test", () => {
  it("is a function", () => {
    expect(restEndpointMethods).toBeInstanceOf(Function);
  });

  it("restEndpointMethods.VERSION is set", () => {
    expect(restEndpointMethods.VERSION).toEqual("0.0.0-development");
  });
});
