---
name: List secret scanning alerts for an enterprise
example: octokit.rest.secretScanning.listAlertsForEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/secret-scanning/alerts
scope: secretScanning
type: API method
---

# List secret scanning alerts for an enterprise

Lists secret scanning alerts for eligible repositories in an enterprise, from newest to oldest.

Alerts are only returned for organizations in the enterprise for which the authenticated user is an organization owner or a [security manager](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).

The authenticated user must be a member of the enterprise in order to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `repo` scope or `security_events` scope to use this endpoint.

```js
octokit.rest.secretScanning.listAlertsForEnterprise({
  enterprise,
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
    <tr><td>enterprise</td><td>yes</td><td>

The slug version of the enterprise name. You can also substitute this value with the enterprise id.

</td></tr>
<tr><td>state</td><td>no</td><td>

Set to `open` or `resolved` to only list secret scanning alerts in a specific state.

</td></tr>
<tr><td>secret_type</td><td>no</td><td>

A comma-separated list of secret types to return. All default secret patterns are returned. To return experimental patterns, pass the token name(s) in the parameter. See "[Supported secret scanning patterns](https://docs.github.com/enterprise-cloud@latest/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)" for a complete list of secret types.

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
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>before</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>after</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/secret-scanning/secret-scanning#list-secret-scanning-alerts-for-an-enterprise).
