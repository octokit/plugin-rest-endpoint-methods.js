import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Octokit } from "@octokit/core";
import fetchMock from "fetch-mock";

import sinon from "sinon";
import {
  legacyRestEndpointMethods,
  restEndpointMethods,
} from "../src/index.ts";
import type { Api } from "../src/types.ts";

describe("REST API endpoint methods", () => {
  it("README example", async () => {
    const mock = fetchMock.createInstance().post(
      "path:/user/repos",
      { id: 1 },
      {
        body: {
          name: "my-new-repo",
        },
      },
    );

    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit({
      auth: "secret123",
      request: {
        fetch: mock.fetchHandler,
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
      .createInstance()
      .getOnce("path:/codes_of_conduct", [{ key: "mit" }]);

    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit({
      request: {
        fetch: mock.fetchHandler,
      },
    });

    // See https://developer.github.com/v3/repos/#create-a-repository-dispatch-event
    const { data } = await octokit.rest.codesOfConduct.getAllCodesOfConduct();

    expect(data[0].key).toStrictEqual("mit");
  });

  it("octokit.rest.markdown.renderRaw()", async () => {
    const mock = fetchMock.createInstance().postOnce(
      ({ url, options: { body } }) => {
        if (url === "https://api.github.com/markdown/raw") {
          expect(body).toEqual("# Hello, world!");
          return true;
        }
        return false;
      },
      { ok: true },
      {
        headers: {
          "content-type": "text/plain; charset=utf-8",
        },
      },
    );

    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit({
      request: {
        fetch: mock.fetchHandler,
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
    const mock = fetchMock.createInstance().postOnce(
      ({ url, options: { body } }) => {
        const path = new URL(url);
        if (
          `${path.origin}${path.pathname}` ===
          "https://uploads.github.com/repos/octocat/hello-world/releases/123/assets"
        ) {
          expect(body).toEqual("test 1, 2");
          return true;
        }
        return false;
      },
      { ok: true },
      {
        headers: {
          "content-type": "text/plain",
        },
        query: {
          name: "test.txt",
          label: "test",
        },
      },
    );

    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit({
      auth: "secret123",
      request: {
        fetch: mock.fetchHandler,
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
    const mock = fetchMock.createInstance().postOnce(
      "https://api.github.com/repos/octocat/hello-world/branches/latest/protection/required_status_checks/contexts",
      { ok: true },
      {
        body: ["myci1", "myci2"],
      },
    );

    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit({
      auth: "secret123",
      request: {
        fetch: mock.fetchHandler,
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
      .createInstance()
      .getOnce("https://api.github.com/app/installations", { ok: true });

    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit({
      auth: "secret123",
      request: {
        fetch: mock.fetchHandler,
      },
    });

    return octokit.rest.apps.listInstallations();
  });

  describe("mocking", () => {
    let octokit: Octokit & Api;

    beforeEach(() => {
      const networkMock = fetchMock
        .createInstance()
        .getOnce(
          "https://api.github.com/repos/octokit/plugin-rest-endpoint-methods/issues/1/labels",
          [{ name: "mocked from network" }],
        );

      const MyOctokit = Octokit.plugin(restEndpointMethods);
      octokit = new MyOctokit({
        request: {
          fetch: networkMock.fetchHandler,
        },
      });
    });

    afterEach(async () => {
      const restoredResult = await octokit.rest.issues.listLabelsOnIssue({
        owner: "octokit",
        repo: "plugin-rest-endpoint-methods",
        issue_number: 1,
      });
      expect(restoredResult.data[0].name).toBe("mocked from network");
    });

    it("allows mocking with sinon.stub", async () => {
      const stub = sinon
        .stub(octokit.rest.issues, "listLabelsOnIssue")
        .resolves({ data: [{ name: "mocked from sinon" }] } as Awaited<
          ReturnType<typeof octokit.rest.issues.listLabelsOnIssue>
        >);

      const sinonResult = await octokit.rest.issues.listLabelsOnIssue({
        owner: "octokit",
        repo: "plugin-rest-endpoint-methods",
        issue_number: 1,
      });
      expect(sinonResult.data[0].name).toBe("mocked from sinon");

      stub.restore();
    });

    it("allows mocking with jest.spyOn", async () => {
      vi.spyOn(octokit.rest.issues, "listLabelsOnIssue").mockResolvedValueOnce({
        data: [{ name: "mocked from jest" }],
      } as Awaited<ReturnType<typeof octokit.rest.issues.listLabelsOnIssue>>);

      const jestResult = await octokit.rest.issues.listLabelsOnIssue({
        owner: "octokit",
        repo: "plugin-rest-endpoint-methods",
        issue_number: 1,
      });
      expect(jestResult.data[0].name).toBe("mocked from jest");

      vi.restoreAllMocks();
    });

    it("allows manually replacing a method", async () => {
      const oldImplementation = octokit.rest.issues.listLabelsOnIssue;

      octokit.rest.issues.listLabelsOnIssue = (async () => {
        return {
          data: [{ name: "mocked from custom implementation" }],
        } as Awaited<ReturnType<typeof octokit.rest.issues.listLabelsOnIssue>>;
      }) as unknown as typeof oldImplementation;

      const customResult = await octokit.rest.issues.listLabelsOnIssue({
        owner: "octokit",
        repo: "plugin-rest-endpoint-methods",
        issue_number: 1,
      });
      expect(customResult.data[0].name).toBe(
        "mocked from custom implementation",
      );

      delete (octokit.rest.issues as any).listLabelsOnIssue;
      octokit.rest.issues.listLabelsOnIssue = oldImplementation;
    });
  });

  it("lists all methods (e.g. with tab-tab in a REPL)", async () => {
    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit();

    const methods = Object.keys(octokit.rest.issues);

    expect(methods).toContain("listLabelsOnIssue");
  });

  // besides setting `octokit.rest.*`, the plugin exports legacyRestEndpointMethods
  // which is also setting the same methods directly on `octokit.*` for legacy reasons.
  // We will deprecate the `octokit.*` methods in future, but for now we just make sure they are set

  it("legacyRestEndpointMethods", async () => {
    const mock = fetchMock.createInstance().post(
      "path:/user/repos",
      { id: 1 },
      {
        body: {
          name: "my-new-repo",
        },
      },
    );

    const MyOctokit = Octokit.plugin(legacyRestEndpointMethods);
    const octokit = new MyOctokit({
      auth: "secret123",
      request: {
        fetch: mock.fetchHandler,
      },
    });

    // See https://developer.github.com/v3/repos/#create
    const response1 = await octokit.repos.createForAuthenticatedUser({
      name: "my-new-repo",
    });
    const response2 = await octokit.rest.repos.createForAuthenticatedUser({
      name: "my-new-repo",
    });

    expect(response1.data.id).toStrictEqual(1);
    expect(response2.data.id).toStrictEqual(1);
  });
});
