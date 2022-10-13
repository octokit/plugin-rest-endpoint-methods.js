---
name: List custom repository roles in an organization
example: octokit.rest.orgs.listCustomRoles({ organization_id })
route: GET /organizations/{organization_id}/custom_roles
scope: orgs
type: API method
---

# List custom repository roles in an organization

List the custom repository roles available in this organization. In order to see custom
repository roles in an organization, the authenticated user must be an organization owner.

To use this endpoint the authenticated user must be an administrator for the organization or of an repository of the organizaiton and must use an access token with `admin:org repo` scope.
GitHub Apps must have the `organization_custom_roles:read` organization permission to use this endpoint.

For more information on custom repository roles, see "[Managing custom repository roles for an organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".

```js
octokit.rest.orgs.listCustomRoles({
  organization_id,
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
    <tr><td>organization_id</td><td>yes</td><td>

The unique identifier of the organization.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#list-custom-repository-roles-in-an-organization).
