---
name: Unblock a user from an organization
example: octokit.orgs.unblockUser({ org, username })
route: DELETE /orgs/{org}/blocks/{username}
scope: orgs
type: API method
---

# Unblock a user from an organization

```js
octokit.orgs.unblockUser({
  org,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>username</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#unblock-a-user-from-an-organization).
