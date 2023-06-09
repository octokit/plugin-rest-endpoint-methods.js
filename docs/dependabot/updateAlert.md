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

To use this endpoint, you must have access to security alerts for the repository. For more information, see "[Granting access to security alerts](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."

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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>alert_number</td><td>yes</td><td>

The number that identifies a Dependabot alert in its repository.
You can find this at the end of the URL for a Dependabot alert within GitHub,
or in `number` fields in the response from the
`GET /repos/{owner}/{repo}/dependabot/alerts` operation.

</td></tr>
<tr><td>state</td><td>yes</td><td>

The state of the Dependabot alert.
A `dismissed_reason` must be provided when setting the state to `dismissed`.

</td></tr>
<tr><td>dismissed_reason</td><td>no</td><td>

**Required when `state` is `dismissed`.** A reason for dismissing the alert.

</td></tr>
<tr><td>dismissed_comment</td><td>no</td><td>

An optional comment associated with dismissing the alert.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/dependabot#update-a-dependabot-alert).
