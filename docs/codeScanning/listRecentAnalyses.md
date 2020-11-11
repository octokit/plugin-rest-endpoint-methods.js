---
name: List recent code scanning analyses for a repository
example: octokit.codeScanning.listRecentAnalyses({ owner, repo })
route: GET /repos/{owner}/{repo}/code-scanning/analyses
scope: codeScanning
type: API method
---

# List recent code scanning analyses for a repository

List the details of recent code scanning analyses for a repository. For private repos, you must use an access token with the `repo` scope. For public repos, you must use an access token with `public_repo` and `repo:security_events` scopes. GitHub Apps must have the `security_events` read permission to use this endpoint.

```js
octokit.codeScanning.listRecentAnalyses({
  owner,
  repo
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
<tr><td>ref</td><td>no</td><td>

Set a full Git reference to list alerts for a specific branch. The `ref` must be formatted as `refs/heads/<branch name>`.

</td></tr>
<tr><td>tool_name</td><td>no</td><td>

Set a single code scanning tool name to filter alerts by tool.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/code-scanning/#list-recent-analyses).
