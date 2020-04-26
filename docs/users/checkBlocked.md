---
name: Check whether you've blocked a user
example: octokit.users.checkBlocked({ username })
route: GET /user/blocks/{username}
scope: users
type: API method
---

# Check whether you've blocked a user

If the user is blocked:

If the user is not blocked:

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

username parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/blocking/#check-whether-youve-blocked-a-user).
