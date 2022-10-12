---
name: Update a custom role
example: octokit.rest.orgs.updateCustomRole({ org, role_id })
route: PATCH /orgs/{org}/custom_roles/{role_id}
scope: orgs
type: API method
---

# Update a custom role

**Note**: This operation is in beta and subject to change.

Updates a custom repository role that can be used by all repositories owned by the organization.

To use this endpoint the authenticated user must be an administrator for the organization and must use an access token with `admin:org` scope.
GitHub Apps must have the `organization_custom_roles:write` organization permission to use this endpoint.

For more information about custom repository roles, see "[Managing custom repository roles for an organization](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."

```js
octokit.rest.orgs.updateCustomRole({
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
<tr><td>name</td><td>no</td><td>

The name of the custom role.

</td></tr>
<tr><td>description</td><td>no</td><td>

A short description about who this role is for or what permissions it grants.

</td></tr>
<tr><td>base_role</td><td>no</td><td>

The system role from which this role inherits permissions.

</td></tr>
<tr><td>permissions</td><td>no</td><td>

A list of additional permissions included in this role. If specified, these permissions will replace any currently set on the role.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#update-a-custom-role).
