---
name: Unblock a user
example: octokit.orgs.unblockUser({ org, username })
route: DELETE /orgs/{org}/blocks/{username}
scope: orgs
type: API method
---

# Unblock a user

```js
octokit.orgs.unblockUser({
  org,
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
    <tr><td>org</td><td>yes</td><td>

org parameter

</td></tr>
<tr><td>username</td><td>yes</td><td>

username parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/blocking/#unblock-a-user).
