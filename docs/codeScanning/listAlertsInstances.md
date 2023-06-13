---
name: List instances of a code scanning alert
example: octokit.rest.codeScanning.listAlertsInstances({ owner, repo, alert_number })
route: GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances
scope: codeScanning
type: API method
---

# List instances of a code scanning alert

**Deprecated:** This method has been renamed to codeScanning.listAlertInstances

Lists all instances of the specified code scanning alert.
You must use an access token with the `security_events` scope to use this endpoint with private repos,
the `public_repo` scope also grants permission to read security events on public repos only.
GitHub Apps must have the `security_events` read permission to use this endpoint.

```js
octokit.rest.codeScanning.listAlertsInstances({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>alert_number</td><td>yes</td><td>

The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>ref</td><td>no</td><td>

The Git reference for the results you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert).
