---
name: Check public organization membership for a user
example: octokit.orgs.checkPublicMembershipForUser({ org, username })
route: GET /orgs/{org}/public_members/{username}
scope: orgs
type: API method
---

# Check public organization membership for a user

```js
octokit.orgs.checkPublicMembershipForUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#check-public-organization-membership-for-a-user).
