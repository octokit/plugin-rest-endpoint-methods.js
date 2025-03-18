---
name: Update a code scanning alert
example: octokit.rest.codeScanning.updateAlert({ owner, repo, alert_number, state })
route: PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}
scope: codeScanning
type: API method
---

# Update a code scanning alert

Updates the status of a single code scanning alert.
OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```js
octokit.rest.codeScanning.updateAlert({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>alert_number</td><td>yes</td><td>

The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.

</td></tr>
<tr><td>state</td><td>yes</td><td>

Sets the state of the code scanning alert. You must provide `dismissed_reason` when you set the state to `dismissed`.

</td></tr>
<tr><td>dismissed_reason</td><td>no</td><td>

**Required when the state is dismissed.** The reason for dismissing or closing the alert.

</td></tr>
<tr><td>dismissed_comment</td><td>no</td><td>

The dismissal comment associated with the dismissal of the alert.

</td></tr>
<tr><td>create_request</td><td>no</td><td>

If `true`, attempt to create an alert dismissal request.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-scanning/code-scanning#update-a-code-scanning-alert).
