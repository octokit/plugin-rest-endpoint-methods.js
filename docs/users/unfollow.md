---
name: Unfollow a user
example: octokit.rest.users.unfollow({ username })
route: DELETE /user/following/{username}
scope: users
type: API method
---

# Unfollow a user

OAuth app tokens and personal access tokens (classic) need the `user:follow` scope to use this endpoint.

```js
octokit.rest.users.unfollow({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/followers#unfollow-a-user).
