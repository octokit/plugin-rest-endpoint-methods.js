---
name: Get a secret scanning alert
example: octokit.secretScanning.getAlert({ owner, repo, alert_number })
route: GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}
scope: secretScanning
type: API method
---

# Get a secret scanning alert

Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

```js
octokit.secretScanning.getAlert({
  owner,
  repo,
  alert_number,
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
<tr><td>alert_number</td><td>yes</td><td>

The security alert number, found at the end of the security alert's URL.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/secret-scanning#get-a-secret-scanning-alert).
