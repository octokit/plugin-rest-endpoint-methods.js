---
name: List secret scanning alerts for an organization
example: octokit.rest.secretScanning.listAlertsForOrg({ org })
route: GET /orgs/{org}/secret-scanning/alerts
scope: secretScanning
type: API method
---

# List secret scanning alerts for an organization

Lists secret scanning alerts for eligible repositories in an organization, from newest to oldest.

The authenticated user must be an administrator or security manager for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

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

A comma-separated list of secret types to return. All default secret patterns are returned. To return generic patterns, pass the token name(s) in the parameter. See "[Supported secret scanning patterns](https://docs.github.com/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)" for a complete list of secret types.

</td></tr>
<tr><td>resolution</td><td>no</td><td>

A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`.

</td></tr>
<tr><td>assignee</td><td>no</td><td>

Filters alerts by assignee. Use `*` to get all assigned alerts, `none` to get all unassigned alerts, or a GitHub username to get alerts assigned to a specific user.

</td></tr>
<tr><td>sort</td><td>no</td><td>

The property to sort the results by. `created` means when the alert was created. `updated` means when the alert was updated or resolved.

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction to sort the results by.

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>before</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for events before this cursor. To receive an initial cursor on your first request, include an empty "before" query string.

</td></tr>
<tr><td>after</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for events after this cursor. To receive an initial cursor on your first request, include an empty "after" query string.

</td></tr>
<tr><td>validity</td><td>no</td><td>

A comma-separated list of validities that, when present, will return alerts that match the validities in this list. Valid options are `active`, `inactive`, and `unknown`.

</td></tr>
<tr><td>is_publicly_leaked</td><td>no</td><td>

A boolean value representing whether or not to filter alerts by the publicly-leaked tag being present.

</td></tr>
<tr><td>is_multi_repo</td><td>no</td><td>

A boolean value representing whether or not to filter alerts by the multi-repo tag being present.

</td></tr>
<tr><td>hide_secret</td><td>no</td><td>

A boolean value representing whether or not to hide literal secrets in the results.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/secret-scanning/secret-scanning#list-secret-scanning-alerts-for-an-organization).
