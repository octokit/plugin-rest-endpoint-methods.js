---
name: Check if a user is blocked by an organization
example: octokit.orgs.checkBlockedUser({ org, username })
route: GET /orgs/{org}/blocks/{username}
scope: orgs
type: API method
---

# Check if a user is blocked by an organization

```js
octokit.orgs.checkBlockedUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization).
