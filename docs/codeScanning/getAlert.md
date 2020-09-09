---
name: Get a code scanning alert
example: octokit.codeScanning.getAlert({ owner, repo })
route: GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}
scope: codeScanning
type: API method
---

# Get a code scanning alert

Gets a single code scanning alert. For private repos, you must use an access token with the `repo` scope. For public repos, you must use an access token with `public_repo` and `repo:security_events` scopes.
GitHub Apps must have the `security_events` read permission to use this endpoint.

```js
octokit.codeScanning.getAlert({
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
<tr><td>alert_number</td><td>no</td><td>

The code scanning alert number.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/code-scanning/#get-a-code-scanning-alert).
