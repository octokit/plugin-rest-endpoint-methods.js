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
        fetch: mock,
      },
      log: {
        warn: (deprecation: Error) => {
          warnCalledCount++;
          expect(deprecation).toMatch(
            "octokit.reactions.delete() has been renamed to octokit.reactions.deleteLegacy()"
          );
        },
      },
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
        fetch: mock,
      },
      log: {
        warn: (deprecation: Error) => {
          warnCalledCount++;
          expect(deprecation).toMatch(
            "octokit.reactions.deleteLegacy() is deprecated, see https://developer.github.com/v3/reactions/#delete-a-reaction-legacy"
          );
        },
      },
    });
    // See https://developer.github.com/v3/reactions/#delete-a-reaction-legacy
    await octokit.reactions.deleteLegacy({ reaction_id: 1 });

    expect(warnCalledCount).toEqual(1);
  });

  it("deprecated parameter", async () => {
    const mock = fetchMock
      .sandbox()
      .putOnce("path:/repos/octocat/hello-world/actions/secrets/MY_SECRET", {
        ok: true,
      });
    const MyOctokit = Octokit.plugin(restEndpointMethods);

    let warnCalledCount = 0;
    const octokit = new MyOctokit({
      request: {
        fetch: mock,
      },
      log: {
        warn: (deprecation: Error) => {
          warnCalledCount++;
          expect(deprecation).toMatch(
            '"name" parameter is deprecated for "octokit.actions.createOrUpdateRepoSecret()". Use "secret_name" instead'
          );
        },
      },
    });
    // See https://developer.github.com/v3/actions/secrets/#create-or-update-a-repository-secret
    // The `:secret_name` URL parameter was `:name` until May 14, 2020
    // @ts-ignore
    const { data } = await octokit.actions.createOrUpdateRepoSecret({
      owner: "octocat",
      repo: "hello-world",
      name: "MY_SECRET",
    });
    expect(data).toStrictEqual({ ok: true });
    expect(warnCalledCount).toEqual(1);
  });

  it("deprecated parameter + new parameter", async () => {
    const mock = fetchMock
      .sandbox()
      .putOnce("path:/repos/octocat/hello-world/actions/secrets/MY_SECRET2", {
        ok: true,
      });
    const MyOctokit = Octokit.plugin(restEndpointMethods);

    let warnCalledCount = 0;
    const octokit = new MyOctokit({
      request: {
        fetch: mock,
      },
      log: {
        warn: (deprecation: Error) => {
          warnCalledCount++;
          expect(deprecation).toMatch(
            '"name" parameter is deprecated for "octokit.actions.createOrUpdateRepoSecret()". Use "secret_name" instead'
          );
        },
      },
    });
    // See https://developer.github.com/v3/actions/secrets/#create-or-update-a-repository-secret
    // The `:secret_name` URL parameter was `:name` until May 14, 2020
    // @ts-ignore
    const { data } = await octokit.actions.createOrUpdateRepoSecret({
      owner: "octocat",
      repo: "hello-world",
      name: "MY_SECRET1",
      secret_name: "MY_SECRET2",
    });
    expect(data).toStrictEqual({ ok: true });
    expect(warnCalledCount).toEqual(1);
  });

  it("deprecated method + deprecated parameter", async () => {
    const mock = fetchMock
      .sandbox()
      .putOnce("path:/repos/octocat/hello-world/actions/secrets/MY_SECRET", {
        ok: true,
      });
    const MyOctokit = Octokit.plugin(restEndpointMethods);

    const deprecations: string[] = [];
    const octokit = new MyOctokit({
      request: {
        fetch: mock,
      },
      log: {
        warn: (deprecation: Error) => {
          deprecations.push(deprecation.toString());
        },
      },
    });
    // See https://developer.github.com/v3/actions/secrets/#create-or-update-a-repository-secret
    // The `:secret_name` URL parameter was `:name` until May 14, 2020
    // @ts-ignore
    const { data } = await octokit.actions.createOrUpdateSecretForRepo({
      owner: "octocat",
      repo: "hello-world",
      name: "MY_SECRET",
    });
    expect(data).toStrictEqual({ ok: true });
    expect(deprecations.length).toEqual(2);
    expect(deprecations.sort()).toStrictEqual([
      '"name" parameter is deprecated for "octokit.actions.createOrUpdateSecretForRepo()". Use "secret_name" instead',
      "octokit.actions.createOrUpdateSecretForRepo() has been renamed to octokit.actions.createOrUpdateRepoSecret()",
    ]);
  });
});
