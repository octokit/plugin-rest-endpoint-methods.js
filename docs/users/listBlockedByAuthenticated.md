---
name: List users blocked by the authenticated user
example: octokit.rest.users.listBlockedByAuthenticated()
route: GET /user/blocks
scope: users
type: API method
---

# List users blocked by the authenticated user

**Deprecated:** This method has been renamed to users.listBlockedByAuthenticatedUser

List the users you've blocked on your personal account.

```js
octokit.rest.users.listBlockedByAuthenticated();
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

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/blocking#list-users-blocked-by-the-authenticated-user).
