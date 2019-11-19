import fetchMock from "fetch-mock";
import { Octokit } from "@octokit/core";

import { restEndpointMethods } from "../src";

describe("Deprecations", () => {
  it("deprecated method", async () => {
    const mock = fetchMock.sandbox().get("path:/licenses", []);
    const MyOctokit = Octokit.plugin(restEndpointMethods);
    let warnCalledCount = 0;
    const octokit = new MyOctokit({
      request: {
        fetch: mock
      },
      log: {
        warn: (deprecation: Error) => {
          warnCalledCount++;
          expect(deprecation.message).toMatch(
            "octokit.licenses.list() has been renamed to octokit.licenses.listCommonlyUsed()"
          );
        }
      }
    });

    // See https://developer.github.com/v3/licenses/#list-commonly-used-licenses
    const { data } = await octokit.licenses.list();

    expect(data).toStrictEqual([]);
    expect(warnCalledCount).toEqual(1);
  });

  it("deprecated parameter", async () => {
    const mock = fetchMock.sandbox().post(
      "path:/repos/octocat/hello-world/issues/123/comments",
      {
        ok: true
      },
      {
        body: {
          body: "Hello there!"
        }
      }
    );
    const MyOctokit = Octokit.plugin(restEndpointMethods);

    let warnCalledCount = 0;
    const octokit = new MyOctokit({
      request: {
        fetch: mock
      },
      log: {
        warn: (deprecation: Error) => {
          warnCalledCount++;
          expect(deprecation.message).toMatch(
            '"number" parameter is deprecated for ".issues.createComment()". Use "issue_number" instead'
          );
        }
      }
    });

    // See https://developer.github.com/v3/issues/comments/#create-a-comment
    const { data } = await octokit.issues.createComment({
      owner: "octocat",
      repo: "hello-world",
      number: 123,
      body: "Hello there!"
    });

    expect(data).toStrictEqual({ ok: true });
    expect(warnCalledCount).toEqual(1);
  });

  it("deprecated parameter + new parameter", async () => {
    const mock = fetchMock.sandbox().post(
      "path:/repos/octocat/hello-world/issues/456/comments",
      {
        ok: true
      },
      {
        body: {
          body: "Hello there!"
        }
      }
    );
    const MyOctokit = Octokit.plugin(restEndpointMethods);

    let warnCalledCount = 0;
    const octokit = new MyOctokit({
      request: {
        fetch: mock
      },
      log: {
        warn: (deprecation: Error) => {
          warnCalledCount++;
          expect(deprecation.message).toMatch(
            '"number" parameter is deprecated for ".issues.createComment()". Use "issue_number" instead'
          );
        }
      }
    });

    // See https://developer.github.com/v3/issues/comments/#create-a-comment
    const { data } = await octokit.issues.createComment({
      owner: "octocat",
      repo: "hello-world",
      number: 123,
      issue_number: 456,
      body: "Hello there!"
    });

    expect(data).toStrictEqual({ ok: true });
    expect(warnCalledCount).toEqual(1);
  });
});
