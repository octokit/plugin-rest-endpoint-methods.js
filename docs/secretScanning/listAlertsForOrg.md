---
name: List secret scanning alerts for an organization
example: octokit.rest.secretScanning.listAlertsForOrg({ org })
route: GET /orgs/{org}/secret-scanning/alerts
scope: secretScanning
type: API method
---

# List secret scanning alerts for an organization

Lists secret scanning alerts for eligible repositories in an organization, from newest to oldest.
To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

```js
octokit.rest.secretScanning.listAlertsForOrg({
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

Set to `open` or `resolved` to only list secret scanning alerts in a specific state.

</td></tr>
<tr><td>secret_type</td><td>no</td><td>

A comma-separated list of secret types to return. By default all secret types are returned.
See "[Secret scanning patterns](https://docs.github.com/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)"
for a complete list of secret types.

</td></tr>
<tr><td>resolution</td><td>no</td><td>

A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`.

</td></tr>
<tr><td>sort</td><td>no</td><td>

The property to sort the results by. `created` means when the alert was created. `updated` means when the alert was updated or resolved.

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
<tr><td>before</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor. To receive an initial cursor on your first request, include an empty "before" query string.

</td></tr>
<tr><td>after</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor. To receive an initial cursor on your first request, include an empty "after" query string.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization).
