---
name: Check organization membership for a user
example: octokit.orgs.checkMembership({ org, username })
route: GET /orgs/{org}/members/{username}
scope: orgs
type: API method
---

# Check organization membership for a user

**Deprecated:** This method has been renamed to orgs.checkMembershipForUser

Check if a user is, publicly or privately, a member of the organization.

```js
octokit.orgs.checkMembership({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/members/#check-organization-membership-for-a-user).
