---
name: Unblock a user
example: octokit.users.unblock({ username })
route: DELETE /user/blocks/{username}
scope: users
type: API method
---

# Unblock a user

```js
octokit.users.unblock({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/users#unblock-a-user).
