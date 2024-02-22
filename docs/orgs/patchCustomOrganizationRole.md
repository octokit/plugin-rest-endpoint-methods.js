---
name: Update a custom organization role
example: octokit.rest.orgs.patchCustomOrganizationRole({ org, role_id })
route: PATCH /orgs/{org}/organization-roles/{role_id}
scope: orgs
type: API method
---

# Update a custom organization role

Updates an existing custom organization role. Permission changes will apply to all assignees. For more information on custom organization roles, see "[Managing people's access to your organization with roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."

To use this endpoint, the authenticated user must be one of:

- An administrator for the organization.
- A user, or a user on a team, with the fine-grained permissions of `write_organization_custom_org_role` in the organization.

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.orgs.patchCustomOrganizationRole({
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

A short description about the intended usage of this role or what permissions it grants.

</td></tr>
<tr><td>permissions</td><td>no</td><td>

A list of additional permissions included in this role.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/organization-roles#update-a-custom-organization-role).
