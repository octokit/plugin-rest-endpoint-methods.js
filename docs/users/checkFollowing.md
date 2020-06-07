---
name: Check if a person is followed by the authenticated user
example: octokit.users.checkFollowing({ username })
route: GET /user/following/{username}
scope: users
type: API method
---

# Check if a person is followed by the authenticated user

**Deprecated:** This method has been renamed to users.checkPersonIsFollowedByAuthenticated

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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/followers/#check-if-a-person-is-followed-by-the-authenticated-user).
