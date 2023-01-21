---
name: Update a Dependabot alert
example: octokit.rest.dependabot.updateAlert({ owner, repo, alert_number, state })
route: PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}
scope: dependabot
type: API method
---

# Update a Dependabot alert

You must use an access token with the `security_events` scope to use this endpoint with private repositories.
You can also use tokens with the `public_repo` scope for public repositories only.
GitHub Apps must have **Dependabot alerts** write permission to use this endpoint.

```js
octokit.rest.dependabot.updateAlert({
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

The number that identifies a Dependabot alert in its repository. You can find this at the end of the URL for a Dependabot alert within GitHub, or in `number` fields in the response from the `GET /repos/{owner}/{repo}/dependabot/alerts` operation.

</td></tr>
<tr><td>state</td><td>yes</td><td>

Sets the status of the dependabot alert. You must provide `dismissed_reason` when you set the state to `dismissed`.

</td></tr>
<tr><td>dismissed_reason</td><td>no</td><td>

**Required when the `state` is `dismissed`.** The reason for dismissing the Dependabot alert.

</td></tr>
<tr><td>dismissed_comment</td><td>no</td><td>

An optional comment associated with the alert's dismissal. The maximum size is 280 characters.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/dependabot#update-a-dependabot-alert).
