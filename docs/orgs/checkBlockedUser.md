---
name: Check whether a user is blocked from an organization
example: octokit.orgs.checkBlockedUser({ org, username })
route: GET /orgs/{org}/blocks/{username}
scope: orgs
type: API method
---

# Check whether a user is blocked from an organization

If the user is blocked:

If the user is not blocked:

```js
octokit.orgs.checkBlockedUser({
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

</td></tr>
<tr><td>username</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/blocking/#check-whether-a-user-is-blocked-from-an-organization).
