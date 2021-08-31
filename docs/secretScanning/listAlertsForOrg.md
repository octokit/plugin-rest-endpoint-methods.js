---
name: Lists secret scanning alerts by organization
example: octokit.rest.secretScanning.listAlertsForOrg({ org })
route: GET /orgs/{org}/secret-scanning/alerts
scope: secretScanning
type: API method
---

# Lists secret scanning alerts by organization

Lists all secret scanning alerts for all eligible repositories in an organization, from newest to oldest.
To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

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

</td></tr>
<tr><td>state</td><td>no</td><td>

Set to `open` or `resolved` to only list secret scanning alerts in a specific state.

</td></tr>
<tr><td>secret_type</td><td>no</td><td>

A comma separated list of secret types to return. By default all secret types are returned.

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/secret-scanning#list-secret-scanning-alerts-by-organization).
