---
name: Remove organization membership for a user
example: octokit.rest.orgs.removeMembershipForUser({ org, username })
route: DELETE /orgs/{org}/memberships/{username}
scope: orgs
type: API method
---

# Remove organization membership for a user

In order to remove a user's membership with an organization, the authenticated user must be an organization owner.

If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.

> [!NOTE]
> If a user has both direct membership in the organization as well as indirect membership via an enterprise team, only their direct membership will be removed. Their indirect membership via an enterprise team remains until the user is removed from the enterprise team.

```js
octokit.rest.orgs.removeMembershipForUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/members#remove-organization-membership-for-a-user).
