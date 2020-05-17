---
name: Check if you are following a user
example: octokit.users.checkFollowing({ username })
route: GET /user/following/{username}
scope: users
type: API method
---

# Check if you are following a user

```js
octokit.users.checkFollowing({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/followers/#check-if-you-are-following-a-user).
