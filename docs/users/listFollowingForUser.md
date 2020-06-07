---
name: List the people a user follows
example: octokit.users.listFollowingForUser({ username })
route: GET /users/{username}/following
scope: users
type: API method
---

# List the people a user follows

Lists the people who the specified user follows.

```js
octokit.users.listFollowingForUser({
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

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/followers/#list-the-people-a-user-follows).
