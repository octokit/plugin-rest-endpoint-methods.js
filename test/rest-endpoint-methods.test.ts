import fetchMock from "fetch-mock";
import { Octokit } from "@octokit/core";

import { restEndpointMethods } from "../src";

describe("Smoke test", () => {
  it("README example", async () => {
    const mock = fetchMock.sandbox().post(
      "path:/user/repos",
      { ok: true },
      {
        // @ts-ignore see https://github.com/DefinitelyTyped/DefinitelyTyped/pull/40133
        body: {
          name: "my-new-repo"
        }
      }
    );

    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit({
      auth: "secret123",
      request: {
        fetch: mock
      }
    });

    // See https://developer.github.com/v3/repos/#create
    const { data } = await octokit.rest.repos.createForAuthenticatedUser({
      name: "my-new-repo"
    });

    expect(data).toStrictEqual({ ok: true });
  });
});
