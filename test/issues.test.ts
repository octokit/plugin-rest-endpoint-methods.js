import fetchMock from "fetch-mock";
import { Octokit } from "@octokit/core";

import { restEndpointMethods } from "../src";

describe("https://github.com/octokit/plugin-rest-endpoint-methods.js/issues/83", () => {
  it("git.gists.update({ gist_id, files })", async () => {
    const mock = fetchMock.sandbox().patchOnce(
      "path:/gists/gist123",
      { ok: true },
      {
        body: {
          files: {
            "postcss.config.js": {
              content: "update from api",
              filename: "new-postcss.config.js",
            },
          },
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

    await octokit.rest.gists.update({
      gist_id: "gist123",
      files: {
        "postcss.config.js": {
          content: "update from api",
          filename: "new-postcss.config.js",
        },
      },
    });
  });
});
