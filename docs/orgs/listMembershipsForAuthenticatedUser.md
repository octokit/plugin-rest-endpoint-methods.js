---
name: List organization memberships for the authenticated user
example: octokit.rest.orgs.listMembershipsForAuthenticatedUser()
route: GET /user/memberships/orgs
scope: orgs
type: API method
---

# List organization memberships for the authenticated user

Lists all of the authenticated user's organization memberships.

```js
octokit.rest.orgs.listMembershipsForAuthenticatedUser();
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
    <tr><td>state</td><td>no</td><td>

Indicates the state of the memberships to return. If not specified, the API returns both active and pending memberships.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/members#list-organization-memberships-for-the-authenticated-user).
