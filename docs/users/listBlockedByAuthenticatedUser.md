---
name: List users blocked by the authenticated user
example: octokit.rest.users.listBlockedByAuthenticatedUser()
route: GET /user/blocks
scope: users
type: API method
---

# List users blocked by the authenticated user

List the users you've blocked on your personal account.

```js
octokit.rest.users.listBlockedByAuthenticatedUser();
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/users#list-users-blocked-by-the-authenticated-user).
