---
name: Get a code scanning alert
example: octokit.codeScanning.getAlert({ owner, repo, alert_id })
route: GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_id}
scope: codeScanning
type: API method
---

# Get a code scanning alert

Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

The security `alert_id` is found at the end of the security alert's URL. For example, the security alert ID for `https://github.com/Octo-org/octo-repo/security/code-scanning/88` is `88`.

```js
octokit.codeScanning.getAlert({
  owner,
  repo,
  alert_id,
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
<tr><td>alert_id</td><td>yes</td><td>

alert_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/code-scanning/#get-a-code-scanning-alert).
