---
name: Remove public organization membership for the authenticated user
example: octokit.rest.orgs.removePublicMembershipForAuthenticatedUser({ org, username })
route: DELETE /orgs/{org}/public_members/{username}
scope: orgs
type: API method
---

# Remove public organization membership for the authenticated user

```js
octokit.rest.orgs.removePublicMembershipForAuthenticatedUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user).
