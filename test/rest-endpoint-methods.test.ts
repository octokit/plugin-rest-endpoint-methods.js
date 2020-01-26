import fetchMock from "fetch-mock";
import { Octokit } from "@octokit/core";

import { restEndpointMethods } from "../src";

describe("REST API endpoint methods", () => {
  it("README example", async () => {
    const mock = fetchMock.sandbox().post(
      "path:/user/repos",
      { ok: true },
      {
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
    const { data } = await octokit.repos.createForAuthenticatedUser({
      name: "my-new-repo"
    });

    expect(data).toStrictEqual({ ok: true });
  });

  it("Required preview header", async () => {
    const mock = fetchMock.sandbox().post(
      "path:/repos/octocat/hello-world/dispatches",
      { ok: true },
      {
        body: {
          event_type: "greeting",
          client_payload: { name: "Mona" }
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
    const { data } = await octokit.repos.createDispatchEvent({
      owner: "octocat",
      repo: "hello-world",
      event_type: "greeting",
      client_payload: { name: "Mona" }
    });

    expect(data).toStrictEqual({ ok: true });
  });
});
