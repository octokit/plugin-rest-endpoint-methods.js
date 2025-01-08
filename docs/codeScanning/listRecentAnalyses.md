---
name: List code scanning analyses for a repository
example: octokit.rest.codeScanning.listRecentAnalyses({ owner, repo })
route: GET /repos/{owner}/{repo}/code-scanning/analyses
scope: codeScanning
type: API method
---

# List code scanning analyses for a repository

Lists the details of all code scanning analyses for a repository,
starting with the most recent.
The response is paginated and you can use the `page` and `per_page` parameters
to list the analyses you're interested in.
By default 30 analyses are listed per page.

The `rules_count` field in the response give the number of rules
that were run in the analysis.
For very old analyses this data is not available,
and `0` is returned in this field.

> [!WARNING] > **Closing down notice:** The `tool_name` field is closing down and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.

OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```js
octokit.rest.codeScanning.listRecentAnalyses({
  owner,
  repo,
});
```

## Parameters

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>required</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>tool_name</td><td>no</td><td>

The name of a code scanning tool. Only results by this tool will be listed. You can specify the tool by using either `tool_name` or `tool_guid`, but not both.

</td></tr>
<tr><td>tool_guid</td><td>no</td><td>

The GUID of a code scanning tool. Only results by this tool will be listed. Note that some code scanning tools may not include a GUID in their analysis data. You can specify the tool by using either `tool_guid` or `tool_name`, but not both.

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>pr</td><td>no</td><td>

The number of the pull request for the results you want to list.

</td></tr>
<tr><td>ref</td><td>no</td><td>

The Git reference for the analyses you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.

</td></tr>
<tr><td>sarif_id</td><td>no</td><td>

Filter analyses belonging to the same SARIF upload.

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction to sort the results by.

</td></tr>
<tr><td>sort</td><td>no</td><td>

The property by which to sort the results.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-scanning/code-scanning#list-code-scanning-analyses-for-a-repository).
