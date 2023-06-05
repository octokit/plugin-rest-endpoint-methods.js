import { Octokit } from "@octokit/core";
import { RestEndpointMethodTypes, restEndpointMethods } from "../src";

describe("Smoke test", () => {
  it("Get parameters type for octokit.rest.issues.updateLabel()", async () => {
    const options = {
      owner: "octocat",
      repo: "hello-world",
      name: "bug",
      color: "cc0000",
    };

    return updateLabel(options);

    async function updateLabel(
      _: RestEndpointMethodTypes["issues"]["updateLabel"]["parameters"]
    ): Promise<RestEndpointMethodTypes["issues"]["updateLabel"]["response"]> {
      return {
        headers: {},
        data: {
          id: 123,
          node_id: "123",
          color: "cc0000",
          default: false,
          description: "",
          name: "bug",
          url: "",
        },
        status: 200,
        url: "",
      };
    }
  });

  it("Should accept .endpoint(options) without options.url being set", async () => {
    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit();

    const requestOptions = octokit.rest.repos.getContent.endpoint({
      owner: "foo",
      repo: "bar",
      path: "path/to/binary/file",
      mediaType: {
        format: "raw",
      },
    });

    expect(requestOptions.method).toEqual("GET");
    expect(requestOptions.url).toEqual(
      "https://api.github.com/repos/foo/bar/contents/path%2Fto%2Fbinary%2Ffile"
    );
  });

  it(".defaults()", async () => {
    const MyOctokit = Octokit.plugin(restEndpointMethods);
    const octokit = new MyOctokit();

    const myRequest = octokit.rest.repos.getContent.defaults({
      method: "HEAD",
    });

    expect(myRequest.endpoint.DEFAULTS.method).toEqual("HEAD");
  });
});
