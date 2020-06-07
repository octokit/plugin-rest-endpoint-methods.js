---
name: List organization memberships for the authenticated user
example: octokit.orgs.listMembershipsForAuthenticatedUser()
route: GET /user/memberships/orgs
scope: orgs
type: API method
---

# List organization memberships for the authenticated user

```js
octokit.orgs.listMembershipsForAuthenticatedUser();
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

Indicates the state of the memberships to return. Can be either `active` or `pending`. If not specified, the API returns both active and pending memberships.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/members/#list-organization-memberships-for-the-authenticated-user).
