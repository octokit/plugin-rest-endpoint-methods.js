---
name: List Dependabot alerts for an enterprise
example: octokit.rest.dependabot.listAlertsForEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/dependabot/alerts
scope: dependabot
type: API method
---

# List Dependabot alerts for an enterprise

Lists Dependabot alerts for repositories that are owned by the specified enterprise.

The authenticated user must be a member of the enterprise to use this endpoint.

Alerts are only returned for organizations in the enterprise for which you are an organization owner or a security manager. For more information about security managers, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint.

```js
octokit.rest.dependabot.listAlertsForEnterprise({
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
<tr><td>epss_percentage</td><td>no</td><td>

CVE Exploit Prediction Scoring System (EPSS) percentage. Can be specified as:

- An exact number (`n`)
- Comparators such as `>n`, `<n`, `>=n`, `<=n`
- A range like `n..n`, where `n` is a number from 0.0 to 1.0

Filters the list of alerts based on EPSS percentages. If specified, only alerts with the provided EPSS percentages will be returned.

</td></tr>
<tr><td>has</td><td>no</td><td>

Filters the list of alerts based on whether the alert has the given value. If specified, only alerts meeting this criterion will be returned.
Multiple `has` filters can be passed to filter for alerts that have all of the values. Currently, only `patch` is supported.

</td></tr>
<tr><td>scope</td><td>no</td><td>

The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.

</td></tr>
<tr><td>sort</td><td>no</td><td>

The property by which to sort the results.
`created` means when the alert was created.
`updated` means when the alert's state last changed.
`epss_percentage` sorts alerts by the Exploit Prediction Scoring System (EPSS) percentage.

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction to sort the results by.

</td></tr>
<tr><td>before</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>after</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

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

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/dependabot/alerts#list-dependabot-alerts-for-an-enterprise).
