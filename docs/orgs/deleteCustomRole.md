---
name: Delete a custom role
example: octokit.rest.orgs.deleteCustomRole({ org, role_id })
route: DELETE /orgs/{org}/custom_roles/{role_id}
scope: orgs
type: API method
---

# Delete a custom role

**Note**: This operation is in beta and is subject to change.

Deletes a custom role from an organization. Once the custom role has been deleted, any
user, team, or invitation with the deleted custom role will be reassigned the inherited role.

To use this endpoint the authenticated user must be an administrator for the organization and must use an access token with `admin:org` scope.
GitHub Apps must have the `organization_custom_roles:write` organization permission to use this endpoint.

For more information about custom repository roles, see "[Managing custom repository roles for an organization](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."

```js
octokit.rest.orgs.deleteCustomRole({
  org,
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
<tr><td>role_id</td><td>yes</td><td>

The unique identifier of the role.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#delete-a-custom-role).
