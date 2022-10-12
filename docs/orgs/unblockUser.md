---
name: Unblock a user from an organization
example: octokit.rest.orgs.unblockUser({ org, username })
route: DELETE /orgs/{org}/blocks/{username}
scope: orgs
type: API method
---

# Unblock a user from an organization

```js
octokit.rest.orgs.unblockUser({
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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#unblock-a-user-from-an-organization).
