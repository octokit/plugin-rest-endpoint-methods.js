import { RestEndpointMethodTypes } from "../src";

describe("Smoke test", () => {
  it("Get parameters type for octokit.issues.updateLabel()", async () => {
    const options = {
      owner: "octocat",
      repo: "hello-world",
      name: "bug",
      color: "cc0000",
    };

    return updateLabel(options);

    async function updateLabel(
      options: RestEndpointMethodTypes["issues"]["updateLabel"]["parameters"]
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
        status: 201,
        url: "",
      };
    }
  });
});
