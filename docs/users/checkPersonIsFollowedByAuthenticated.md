---
name: Check if a person is followed by the authenticated user
example: octokit.rest.users.checkPersonIsFollowedByAuthenticated({ username })
route: GET /user/following/{username}
scope: users
type: API method
---

# Check if a person is followed by the authenticated user

```js
octokit.rest.users.checkPersonIsFollowedByAuthenticated({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/followers#check-if-a-person-is-followed-by-the-authenticated-user).
