---
name: Update an organization membership for the authenticated user
example: octokit.rest.orgs.updateMembershipForAuthenticatedUser({ org, state })
route: PATCH /user/memberships/orgs/{org}
scope: orgs
type: API method
---

# Update an organization membership for the authenticated user

```js
octokit.rest.orgs.updateMembershipForAuthenticatedUser({
  org,
  state,
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
<tr><td>state</td><td>yes</td><td>

The state that the membership should be in. Only `"active"` will be accepted.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user).
