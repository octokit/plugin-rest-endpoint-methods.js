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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>state</td><td>no</td><td>

A comma-separated list of states. If specified, only alerts with these states will be returned.

Can be: `auto_dismissed`, `dismissed`, `fixed`, `open`

</td></tr>
<tr><td>severity</td><td>no</td><td>

A comma-separated list of severities. If specified, only alerts with these severities will be returned.

Can be: `low`, `medium`, `high`, `critical`

</td></tr>
<tr><td>ecosystem</td><td>no</td><td>

A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.

Can be: `composer`, `go`, `maven`, `npm`, `nuget`, `pip`, `pub`, `rubygems`, `rust`

</td></tr>
<tr><td>package</td><td>no</td><td>

A comma-separated list of package names. If specified, only alerts for these packages will be returned.

</td></tr>
<tr><td>manifest</td><td>no</td><td>

A comma-separated list of full manifest paths. If specified, only alerts for these manifests will be returned.

</td></tr>
<tr><td>scope</td><td>no</td><td>

The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.

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

**Deprecated**. Page number of the results to fetch. Use cursor-based pagination with `before` or `after` instead.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>before</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor.

</td></tr>
<tr><td>after</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor.

</td></tr>
<tr><td>first</td><td>no</td><td>

**Deprecated**. The number of results per page (max 100), starting from the first matching result.
This parameter must not be used in combination with `last`.
Instead, use `per_page` in combination with `after` to fetch the first page of results.

</td></tr>
<tr><td>last</td><td>no</td><td>

**Deprecated**. The number of results per page (max 100), starting from the last matching result.
This parameter must not be used in combination with `first`.
Instead, use `per_page` in combination with `before` to fetch the last page of results.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/dependabot#list-dependabot-alerts-for-a-repository).
