---
name: List blocked users
example: octokit.orgs.listBlockedUsers({ org })
route: GET /orgs/{org}/blocks
scope: orgs
type: API method
---

# List blocked users

List the users blocked by an organization.

```js
octokit.orgs.listBlockedUsers({
  org,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/blocking/#list-blocked-users).
