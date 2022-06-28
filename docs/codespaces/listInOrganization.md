---
name: List codespaces for the organization
example: octokit.rest.codespaces.listInOrganization({ org_id })
route: GET /orgs/{org_id}/codespaces
scope: codespaces
type: API method
---

# List codespaces for the organization

Lists the codespaces associated to a specified organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.rest.codespaces.listInOrganization({
  org_id,
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
    <tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>org_id</td><td>yes</td><td>

The unique identifier of the organization.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codespaces#list-in-organization).
