---
name: List the people a user follows
example: octokit.rest.users.listFollowingForUser({ username })
route: GET /users/{username}/following
scope: users
type: API method
---

# List the people a user follows

Lists the people who the specified user follows.

```js
octokit.rest.users.listFollowingForUser({
  username,
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
    <tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/users#list-the-people-a-user-follows).
