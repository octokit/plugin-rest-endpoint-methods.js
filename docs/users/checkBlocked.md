---
name: Check if a user is blocked by the authenticated user
example: octokit.users.checkBlocked({ username })
route: GET /user/blocks/{username}
scope: users
type: API method
---

# Check if a user is blocked by the authenticated user

```js
octokit.users.checkBlocked({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user).
