---
name: Update a code scanning alert
example: octokit.rest.codeScanning.updateAlert({ owner, repo, alert_number, state })
route: PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}
scope: codeScanning
type: API method
---

# Update a code scanning alert

Updates the status of a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.

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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>alert_number</td><td>yes</td><td>

The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.

</td></tr>
<tr><td>state</td><td>yes</td><td>

Sets the state of the code scanning alert. Can be one of `open` or `dismissed`. You must provide `dismissed_reason` when you set the state to `dismissed`.

</td></tr>
<tr><td>dismissed_reason</td><td>no</td><td>

**Required when the state is dismissed.** The reason for dismissing or closing the alert. Can be one of: `false positive`, `won't fix`, and `used in tests`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/code-scanning#update-a-code-scanning-alert).
