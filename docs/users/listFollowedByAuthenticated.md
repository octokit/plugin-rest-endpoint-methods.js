---
name: List the people the authenticated user follows
example: octokit.rest.users.listFollowedByAuthenticated()
route: GET /user/following
scope: users
type: API method
---

# List the people the authenticated user follows

**Deprecated:** This method has been renamed to users.listFollowedByAuthenticatedUser

Lists the people who the authenticated user follows.

```js
octokit.rest.users.listFollowedByAuthenticated();
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/followers#list-the-people-the-authenticated-user-follows).
