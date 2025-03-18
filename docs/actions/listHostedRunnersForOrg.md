---
name: List GitHub-hosted runners for an organization
example: octokit.rest.actions.listHostedRunnersForOrg({ org })
route: GET /orgs/{org}/actions/hosted-runners
scope: actions
type: API method
---

# List GitHub-hosted runners for an organization

Lists all GitHub-hosted runners configured in an organization.

OAuth app tokens and personal access tokens (classic) need the `manage_runner:org` scope to use this endpoint.

```js
octokit.rest.actions.listHostedRunnersForOrg({
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
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/hosted-runners#list-github-hosted-runners-for-an-organization).
