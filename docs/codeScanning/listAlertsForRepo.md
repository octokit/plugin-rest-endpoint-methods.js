---
name: List code scanning alerts for a repository
example: octokit.codeScanning.listAlertsForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/code-scanning/alerts
scope: codeScanning
type: API method
---

# List code scanning alerts for a repository

Lists all open code scanning alerts for a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>state</td><td>no</td><td>

Set to `closed` to list only closed code scanning alerts.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/code-scanning/#list-code-scanning-alerts-for-a-repository).
