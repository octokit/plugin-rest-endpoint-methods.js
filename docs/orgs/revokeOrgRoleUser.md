---
name: Remove an organization role from a user
example: octokit.rest.orgs.revokeOrgRoleUser({ org, username, role_id })
route: DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}
scope: orgs
type: API method
---

# Remove an organization role from a user

Remove an organization role from a user. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."

The authenticated user must be an administrator for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.orgs.revokeOrgRoleUser({
  org,
  username,
  role_id,
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
<tr><td>role_id</td><td>yes</td><td>

The unique identifier of the role.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/organization-roles#remove-an-organization-role-from-a-user).
