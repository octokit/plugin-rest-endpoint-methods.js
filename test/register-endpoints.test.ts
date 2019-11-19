import fetchMock from "fetch-mock";
import { Octokit } from "@octokit/core";

import { restEndpointMethods } from "../src";

describe("Deprecations", () => {
  it("deprecated method", async () => {
    const mock = fetchMock.sandbox().get("path:/baz", { ok: true });
    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit({
      request: {
        fetch: mock
      }
    });

    expect(typeof octokit.registerEndpoints).toBe("function");

    octokit.registerEndpoints({
      issues: {
        fooBar: {
          method: "GET",
          url: "/baz"
        }
      }
    });

    // make sure .registerEndpoints does not remove other methods on the same scope
    expect(typeof octokit.issues.get).toBe("function");

    const { data } = await octokit.issues.fooBar();

    expect(data).toStrictEqual({ ok: true });
  });
});
