---
name: List followers of a user
example: octokit.rest.users.listFollowersForUser({ username })
route: GET /users/{username}/followers
scope: users
type: API method
---

# List followers of a user

Lists the people following the specified user.

```js
octokit.rest.users.listFollowersForUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/followers#list-followers-of-a-user).
