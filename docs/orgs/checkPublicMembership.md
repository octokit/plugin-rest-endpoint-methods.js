---
name: Check public organization membership for a user
example: octokit.orgs.checkPublicMembership({ org, username })
route: GET /orgs/{org}/public_members/{username}
scope: orgs
type: API method
---

# Check public organization membership for a user

**Deprecated:** This method has been renamed to orgs.checkPublicMembershipForUser

```js
octokit.orgs.checkPublicMembership({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/members/#check-public-organization-membership-for-a-user).
