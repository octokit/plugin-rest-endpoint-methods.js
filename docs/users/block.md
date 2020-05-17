---
name: Block a user
example: octokit.users.block({ username })
route: PUT /user/blocks/{username}
scope: users
type: API method
---

# Block a user

```js
octokit.users.block({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/blocking/#block-a-user).
