---
name: Update a secret scanning alert
example: octokit.rest.secretScanning.updateAlert({ owner, repo, alert_number, state })
route: PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}
scope: secretScanning
type: API method
---

# Update a secret scanning alert

Updates the status of a secret scanning alert in an eligible repository.
To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.

```js
octokit.rest.secretScanning.updateAlert({
  owner,
  repo,
  alert_number,
  state,
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>alert_number</td><td>yes</td><td>

The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.

</td></tr>
<tr><td>state</td><td>yes</td><td>

Sets the state of the secret scanning alert. You must provide `resolution` when you set the state to `resolved`.

</td></tr>
<tr><td>resolution</td><td>no</td><td>

**Required when the `state` is `resolved`.** The reason for resolving the alert.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/secret-scanning#update-a-secret-scanning-alert).
