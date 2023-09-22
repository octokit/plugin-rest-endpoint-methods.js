---
name: Remove public organization membership for the authenticated user
example: octokit.rest.orgs.removePublicMembershipForAuthenticatedUser({ org, username })
route: DELETE /orgs/{org}/public_members/{username}
scope: orgs
type: API method
---

# Remove public organization membership for the authenticated user

Removes the public membership for the authenticated user from the specified organization, unless public visibility is enforced by default.

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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/members#remove-public-organization-membership-for-the-authenticated-user).
