---
name: List the people the authenticated user follows
example: octokit.rest.users.listFollowedByAuthenticatedUser()
route: GET /user/following
scope: users
type: API method
---

# List the people the authenticated user follows

Lists the people who the authenticated user follows.

```js
octokit.rest.users.listFollowedByAuthenticatedUser();
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-the-people-the-authenticated-user-follows).
