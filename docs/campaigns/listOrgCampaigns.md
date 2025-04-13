---
name: List campaigns for an organization
example: octokit.rest.campaigns.listOrgCampaigns({ org })
route: GET /orgs/{org}/campaigns
scope: campaigns
type: API method
---

# List campaigns for an organization

Lists campaigns in an organization.

The authenticated user must be an owner or security manager for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint.

```js
octokit.rest.campaigns.listOrgCampaigns({
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
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction to sort the results by.

</td></tr>
<tr><td>state</td><td>no</td><td>

If specified, only campaigns with this state will be returned.

</td></tr>
<tr><td>sort</td><td>no</td><td>

The property by which to sort the results.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/campaigns/campaigns#list-campaigns-for-an-organization).
