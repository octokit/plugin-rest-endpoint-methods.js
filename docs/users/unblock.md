---
name: Unblock a user
example: octokit.rest.users.unblock({ username })
route: DELETE /user/blocks/{username}
scope: users
type: API method
---

# Unblock a user

Unblocks the given user and returns a 204.

```js
octokit.rest.users.unblock({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/blocking#unblock-a-user).
