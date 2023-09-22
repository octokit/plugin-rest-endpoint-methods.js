---
name: Block a user
example: octokit.rest.users.block({ username })
route: PUT /user/blocks/{username}
scope: users
type: API method
---

# Block a user

Blocks the given user and returns a 204. If the authenticated user cannot block the given user a 422 is returned.

```js
octokit.rest.users.block({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/blocking#block-a-user).
