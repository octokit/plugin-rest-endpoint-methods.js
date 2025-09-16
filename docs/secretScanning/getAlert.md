---
name: Get a secret scanning alert
example: octokit.rest.secretScanning.getAlert({ owner, repo, alert_number })
route: GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}
scope: secretScanning
type: API method
---

# Get a secret scanning alert

Gets a single secret scanning alert detected in an eligible repository.

The authenticated user must be an administrator for the repository or for the organization that owns the repository to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

```js
octokit.rest.secretScanning.getAlert({
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
<tr><td>hide_secret</td><td>no</td><td>

A boolean value representing whether or not to hide literal secrets in the results.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/secret-scanning/secret-scanning#get-a-secret-scanning-alert).
