import fetchMock from "fetch-mock";
import { Octokit } from "@octokit/core";

import { restEndpointMethods } from "../src";

// All the commented out tests are no longer valid as the methods/parameters
// have been removed. We keep them here for future reference
describe("Deprecations", () => {
  it("renamed method", async () => {
    const mock = fetchMock.sandbox().deleteOnce("path:/reactions/1", 204);
    const MyOctokit = Octokit.plugin(restEndpointMethods);
    let warnCalledCount = 0;
    const octokit = new MyOctokit({
      request: {
        fetch: mock
      },
      log: {
        warn: (deprecation: Error) => {
          warnCalledCount++;
          expect(deprecation).toMatch(
            "octokit.reactions.delete() has been renamed to octokit.reactions.deleteLegacy()"
          );
        }
      }
    });
    // See https://developer.github.com/v3/reactions/#delete-a-reaction-legacy
    await octokit.reactions.delete({ reaction_id: 1 });

    expect(warnCalledCount).toEqual(1);
  });

  it("deprecated method", async () => {
    const mock = fetchMock.sandbox().deleteOnce("path:/reactions/1", 204);
    const MyOctokit = Octokit.plugin(restEndpointMethods);
    let warnCalledCount = 0;
    const octokit = new MyOctokit({
      request: {
        fetch: mock
      },
      log: {
        warn: (deprecation: Error) => {
          warnCalledCount++;
          expect(deprecation).toMatch(
            "octokit.reactions.deleteLegacy() is deprecated, see https://developer.github.com/v3/reactions/#delete-a-reaction-legacy"
          );
        }
      }
    });
    // See https://developer.github.com/v3/reactions/#delete-a-reaction-legacy
    await octokit.reactions.deleteLegacy({ reaction_id: 1 });

    expect(warnCalledCount).toEqual(1);
  });

  // it("deprecated parameter", async () => {
  //   const mock = fetchMock
  //     .sandbox()
  //     .getOnce("path:/repos/octocat/hello-world/commits/sha123", {
  //       ok: true
  //     });
  //   const MyOctokit = Octokit.plugin(restEndpointMethods);
  //   let warnCalledCount = 0;
  //   const octokit = new MyOctokit({
  //     request: {
  //       fetch: mock
  //     },
  //     log: {
  //       warn: (deprecation: Error) => {
  //         warnCalledCount++;
  //         expect(deprecation).toMatch(
  //           '"commit_sha" parameter is deprecated for "octokit.repos.getCommit()". Use "ref" instead'
  //         );
  //       }
  //     }
  //   });
  //   // See https://developer.github.com/v3/issues/comments/#create-a-comment
  //   const { data } = await octokit.repos.getCommit({
  //     owner: "octocat",
  //     repo: "hello-world",
  //     commit_sha: "sha123"
  //   });
  //   expect(data).toStrictEqual({ ok: true });
  //   expect(warnCalledCount).toEqual(1);
  // });
  // it("deprecated parameter + new parameter", async () => {
  //   const mock = fetchMock.sandbox().post(
  //     "path:/repos/octocat/hello-world/issues/456/comments",
  //     {
  //       ok: true
  //     },
  //     {
  //       body: {
  //         body: "Hello there!"
  //       }
  //     }
  //   );
  //   const MyOctokit = Octokit.plugin(restEndpointMethods);
  //   let warnCalledCount = 0;
  //   const octokit = new MyOctokit({
  //     request: {
  //       fetch: mock
  //     },
  //     log: {
  //       warn: (deprecation: Error) => {
  //         warnCalledCount++;
  //         expect(deprecation).toMatch(
  //           '"number" parameter is deprecated for "octokit.issues.createComment()". Use "issue_number" instead'
  //         );
  //       }
  //     }
  //   });
  //   // See https://developer.github.com/v3/issues/comments/#create-a-comment
  //   const { data } = await octokit.issues.createComment({
  //     owner: "octocat",
  //     repo: "hello-world",
  //     number: 123,
  //     issue_number: 456,
  //     body: "Hello there!"
  //   });
  //   expect(data).toStrictEqual({ ok: true });
  //   expect(warnCalledCount).toEqual(1);
  // });
});
