import fetchMock from "fetch-mock";
import { Octokit } from "@octokit/core";

import { restEndpointMethods } from "../src";

describe("REST API endpoint methods", () => {
  it("README example", async () => {
    const mock = fetchMock.sandbox().post(
      "path:/user/repos",
      { id: 1 },
      {
        body: {
          name: "my-new-repo",
        },
      }
    );

    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit({
      auth: "secret123",
      request: {
        fetch: mock,
      },
    });

    // See https://developer.github.com/v3/repos/#create
    const { data } = await octokit.rest.repos.createForAuthenticatedUser({
      name: "my-new-repo",
    });

    expect(data.id).toStrictEqual(1);
  });

  it("Required preview header", async () => {
    const mock = fetchMock
      .sandbox()
      .getOnce("path:/codes_of_conduct", [{ key: "mit" }], {
        headers: {
          accept: "application/vnd.github.scarlet-witch-preview+json",
        },
      });

    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit({
      request: {
        fetch: mock,
      },
    });

    // See https://developer.github.com/v3/repos/#create-a-repository-dispatch-event
    const { data } = await octokit.rest.codesOfConduct.getAllCodesOfConduct();

    expect(data[0].key).toStrictEqual("mit");
  });

  it("octokit.rest.markdown.renderRaw()", async () => {
    const mock = fetchMock.sandbox().postOnce(
      "path:/markdown/raw",
      { ok: true },
      {
        headers: {
          "content-type": "text/plain; charset=utf-8",
        },
        matcher: (url, { body, headers }) => {
          expect(body).toEqual("# Hello, world!");
          return true;
        },
      }
    );

    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit({
      request: {
        fetch: mock,
      },
    });

    return octokit.rest.markdown
      .renderRaw({
        data: "# Hello, world!",
      })
      .catch((error) => {
        console.log(error);

        throw error;
      });
  });

  it("octokit.rest.repos.uploadReleaseAsset()", async () => {
    const mock = fetchMock.sandbox().postOnce(
      "https://uploads.github.com/repos/octocat/hello-world/releases/123/assets",
      { ok: true },
      {
        headers: {
          "content-type": "text/plain",
        },
        query: {
          name: "test.txt",
          label: "test",
        },
        matcher: (url, { body }) => {
          expect(body).toEqual("test 1, 2");
          return true;
        },
      }
    );

    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit({
      auth: "secret123",
      request: {
        fetch: mock,
      },
    });

    return octokit.rest.repos
      .uploadReleaseAsset({
        headers: {
          "content-type": "text/plain",
        },
        owner: "octocat",
        repo: "hello-world",
        release_id: 123,
        data: "test 1, 2",
        name: "test.txt",
        label: "test",
      })
      .catch((error) => {
        console.log(error);

        throw error;
      });
  });

  it("octokit.rest.repos.addProtectedBranchRequiredStatusChecksContexts(): `contexts` option value is sent as request body without namespace", async () => {
    const mock = fetchMock.sandbox().postOnce(
      "https://api.github.com/repos/octocat/hello-world/branches/latest/protection/required_status_checks/contexts",
      { ok: true },
      {
        body: ["myci1", "myci2"],
      }
    );

    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit({
      auth: "secret123",
      request: {
        fetch: mock,
      },
    });

    return octokit.rest.repos
      .addStatusCheckContexts({
        owner: "octocat",
        repo: "hello-world",
        branch: "latest",
        contexts: ["myci1", "myci2"],
      })
      .catch((error) => {
        console.log(error);

        throw error;
      });
  });

  it("octokit.rest.apps.listInstallations(): method without options (octokit/rest.js#818)", async () => {
    const mock = fetchMock
      .sandbox()
      .getOnce("https://api.github.com/app/installations", { ok: true });

    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit({
      auth: "secret123",
      request: {
        fetch: mock,
      },
    });

    return octokit.rest.apps.listInstallations();
  });

  // besides setting `octokit.rest.*`, the plugin is also setting the same methods
  // directly on `octokit.*` for legacy reasons. We will deprecate the `octokit.*`
  // methods in future, but for now we just make sure they are set

  it("octokit.repos.createForAuthenticatedUser()", async () => {
    const mock = fetchMock.sandbox().post(
      "path:/user/repos",
      { id: 1 },
      {
        body: {
          name: "my-new-repo",
        },
      }
    );

    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit({
      auth: "secret123",
      request: {
        fetch: mock,
      },
    });

    // See https://developer.github.com/v3/repos/#create
    const { data } = await octokit.repos.createForAuthenticatedUser({
      name: "my-new-repo",
    });

    expect(data.id).toStrictEqual(1);
  });
});
