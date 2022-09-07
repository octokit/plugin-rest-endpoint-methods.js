---
name: Create a custom role
example: octokit.rest.orgs.createCustomRole({ org, name, base_role, permissions })
route: POST /orgs/{org}/custom_roles
scope: orgs
type: API method
---

# Create a custom role

**Note**: This operation is in beta and is subject to change.

Creates a custom repository role that can be used by all repositories owned by the organization.

To use this endpoint the authenticated user must be an administrator for the organization and must use an access token with `admin:org` scope.
GitHub Apps must have the `organization_custom_roles:write` organization permission to use this endpoint.

For more information on custom repository roles, see "[Managing custom repository roles for an organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."

```js
octokit.rest.orgs.createCustomRole({
  org,
  name,
  base_role,
  permissions,
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
<tr><td>name</td><td>yes</td><td>

The name of the custom role.

</td></tr>
<tr><td>description</td><td>no</td><td>

A short description about the intended usage of this role or what permissions it grants.

</td></tr>
<tr><td>base_role</td><td>yes</td><td>

The system role from which this role inherits permissions.

</td></tr>
<tr><td>permissions</td><td>yes</td><td>

A list of additional permissions included in this role.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#create-a-custom-role).
