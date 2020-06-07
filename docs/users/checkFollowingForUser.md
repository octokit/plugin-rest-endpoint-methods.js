---
name: Check if a user follows another user
example: octokit.users.checkFollowingForUser({ username, target_user })
route: GET /users/{username}/following/{target_user}
scope: users
type: API method
---

# Check if a user follows another user

```js
octokit.users.checkFollowingForUser({
  username,
  target_user,
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
<tr><td>target_user</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/followers/#check-if-a-user-follows-another-user).
