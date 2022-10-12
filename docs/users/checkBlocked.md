---
name: Check if a user is blocked by the authenticated user
example: octokit.rest.users.checkBlocked({ username })
route: GET /user/blocks/{username}
scope: users
type: API method
---

# Check if a user is blocked by the authenticated user

```js
octokit.rest.users.checkBlocked({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user).
