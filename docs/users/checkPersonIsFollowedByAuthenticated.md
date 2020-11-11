---
name: Check if a person is followed by the authenticated user
example: octokit.users.checkPersonIsFollowedByAuthenticated({ username })
route: GET /user/following/{username}
scope: users
type: API method
---

# Check if a person is followed by the authenticated user

```js
octokit.users.checkPersonIsFollowedByAuthenticated({
  username
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user).
