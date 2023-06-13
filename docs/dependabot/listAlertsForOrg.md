---
name: List Dependabot alerts for an organization
example: octokit.rest.dependabot.listAlertsForOrg({ org })
route: GET /orgs/{org}/dependabot/alerts
scope: dependabot
type: API method
---

# List Dependabot alerts for an organization

Lists Dependabot alerts for an organization.

To use this endpoint, you must be an owner or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.

For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have **Dependabot alerts** read permission to use this endpoint.

```js
octokit.rest.dependabot.listAlertsForOrg({
  org,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

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
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/dependabot/alerts#list-dependabot-alerts-for-an-organization).
