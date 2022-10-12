---
name: List fine-grained permissions for an organization
example: octokit.rest.orgs.listFineGrainedPermissions({ org })
route: GET /orgs/{org}/fine_grained_permissions
scope: orgs
type: API method
---

# List fine-grained permissions for an organization

**Note**: This operation is in beta and subject to change.

Lists the fine-grained permissions available for an organization.

To use this endpoint the authenticated user must be an administrator for the organization or of an repository of the organizaiton and must use an access token with `admin:org repo` scope.
GitHub Apps must have the `organization_custom_roles:read` organization permission to use this endpoint.

```js
octokit.rest.orgs.listFineGrainedPermissions({
  org,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-fine-grained-permissions-for-an-organization).
