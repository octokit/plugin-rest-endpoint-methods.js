---
name: List code scanning alerts for a repository
example: octokit.rest.codeScanning.listAlertsForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/code-scanning/alerts
scope: codeScanning
type: API method
---

# List code scanning alerts for a repository

Lists all open code scanning alerts for the default branch (usually `main`
or `master`). You must use an access token with the `security_events` scope to use
this endpoint. GitHub Apps must have the `security_events` read permission to use
this endpoint.

The response includes a `most_recent_instance` object.
This provides details of the most recent instance of this alert
for the default branch or for the specified Git reference
(if you used `ref` in the request).

```js
octokit.rest.codeScanning.listAlertsForRepo({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>tool_name</td><td>no</td><td>

The name of a code scanning tool. Only results by this tool will be listed. You can specify the tool by using either `tool_name` or `tool_guid`, but not both.

</td></tr>
<tr><td>tool_guid</td><td>no</td><td>

The GUID of a code scanning tool. Only results by this tool will be listed. Note that some code scanning tools may not include a GUID in their analysis data. You can specify the tool by using either `tool_guid` or `tool_name`, but not both.

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>ref</td><td>no</td><td>

The Git reference for the results you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.

</td></tr>
<tr><td>state</td><td>no</td><td>

Set to `open`, `fixed`, or `dismissed` to list code scanning alerts in a specific state.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository).
