---
name: List Dependabot alerts for a repository
example: octokit.rest.dependabot.listAlertsForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/dependabot/alerts
scope: dependabot
type: API method
---

# List Dependabot alerts for a repository

You must use an access token with the `security_events` scope to use this endpoint with private repositories.
You can also use tokens with the `public_repo` scope for public repositories only.
GitHub Apps must have **Dependabot alerts** read permission to use this endpoint.

```js
octokit.rest.dependabot.listAlertsForRepo({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>state</td><td>no</td><td>

A comma-separated list of states. If specified, only alerts with these states will be returned.

Can be: `dismissed`, `fixed`, `open`

</td></tr>
<tr><td>severity</td><td>no</td><td>

A comma-separated list of severities. If specified, only alerts with these severities will be returned.

Can be: `low`, `medium`, `high`, `critical`

</td></tr>
<tr><td>ecosystem</td><td>no</td><td>

A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.

Can be: `composer`, `go`, `maven`, `npm`, `nuget`, `pip`, `rubygems`, `rust`

</td></tr>
<tr><td>package</td><td>no</td><td>

A comma-separated list of package names. If specified, only alerts for these packages will be returned.

</td></tr>
<tr><td>manifest</td><td>no</td><td>

A comma-separated list of full manifest paths. If specified, only alerts for these manifests will be returned.

</td></tr>
<tr><td>scope</td><td>no</td><td>

Scope of the dependency on a Dependabot alert.

</td></tr>
<tr><td>sort</td><td>no</td><td>

The property by which to sort the results.
`created` means when the alert was created.
`updated` means when the alert's state last changed.

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction to sort the results by.

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/dependabot#list-dependabot-alerts-for-a-repository).
