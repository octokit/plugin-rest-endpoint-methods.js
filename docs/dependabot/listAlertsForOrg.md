---
name: List Dependabot alerts for an organization
example: octokit.rest.dependabot.listAlertsForOrg({ org })
route: GET /orgs/{org}/dependabot/alerts
scope: dependabot
type: API method
---

# List Dependabot alerts for an organization

Lists Dependabot alerts for an organization.

The authenticated user must be an owner or security manager for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

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
<tr><td>epss_percentage</td><td>no</td><td>

CVE Exploit Prediction Scoring System (EPSS) percentage. Can be specified as:

- An exact number (`n`)
- Comparators such as `>n`, `<n`, `>=n`, `<=n`
- A range like `n..n`, where `n` is a number from 0.0 to 1.0

Filters the list of alerts based on EPSS percentages. If specified, only alerts with the provided EPSS percentages will be returned.

</td></tr>
<tr><td>artifact_registry_url</td><td>no</td><td>

A comma-separated list of artifact registry URLs. If specified, only alerts for repositories with storage records matching these URLs will be returned.

</td></tr>
<tr><td>artifact_registry</td><td>no</td><td>

A comma-separated list of Artifact Registry name strings. If specified, only alerts for repositories with storage records matching these registries will be returned.

Can be: `jfrog-artifactory`

</td></tr>
<tr><td>has</td><td>no</td><td>

Filters the list of alerts based on whether the alert has the given value. If specified, only alerts meeting this criterion will be returned.
Multiple `has` filters can be passed to filter for alerts that have all of the values.

</td></tr>
<tr><td>runtime_risk</td><td>no</td><td>

A comma-separated list of runtime risk strings. If specified, only alerts for repositories with deployment records matching these risks will be returned.

Can be: `critical-resource`, `internet-exposed`, `sensitive-data`, `lateral-movement`

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
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/dependabot/alerts#list-dependabot-alerts-for-an-organization).
