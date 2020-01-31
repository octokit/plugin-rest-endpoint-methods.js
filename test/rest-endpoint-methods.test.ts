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

  it("octokit.repos.uploadReleaseAsset()", async () => {
    const mock = fetchMock.sandbox().postOnce(
      "https://uploads.github.com/repos/octocat/hello-world/releases/123/assets",
      { ok: true },
      {
        headers: {
          "content-type": "text/plain"
        },
        query: {
          name: "test.txt",
          label: "test"
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

    return octokit.repos
      .uploadReleaseAsset({
        headers: {
          "content-type": "text/plain"
        },
        owner: "octocat",
        repo: "hello-world",
        release_id: 123,
        file: "test 1, 2",
        name: "test.txt",
        label: "test"
      })
      .catch(error => {
        console.log(error);

        throw error;
      });
  });
});
