---
name: List code scanning alerts for a repository
example: octokit.codeScanning.listAlertsForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/code-scanning/alerts
scope: codeScanning
type: API method
---

# List code scanning alerts for a repository

Lists all open code scanning alerts for the default branch (usually `main` or `master`). You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

```js
octokit.codeScanning.listAlertsForRepo({
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
<tr><td>state</td><td>no</td><td>

Set to `open`, `fixed`, or `dismissed` to list code scanning alerts in a specific state.

</td></tr>
<tr><td>ref</td><td>no</td><td>

Set a full Git reference to list alerts for a specific branch. The `ref` must be formatted as `refs/heads/<branch name>`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/code-scanning/#list-code-scanning-alerts-for-a-repository).
