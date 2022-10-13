---
name: Set selected organizations enabled for GitHub Actions in an enterprise
example: octokit.rest.enterpriseAdmin.setSelectedOrganizationsEnabledGithubActionsEnterprise({ enterprise, selected_organization_ids })
route: PUT /enterprises/{enterprise}/actions/permissions/organizations
scope: enterpriseAdmin
type: API method
---

# Set selected organizations enabled for GitHub Actions in an enterprise

Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.rest.enterpriseAdmin.setSelectedOrganizationsEnabledGithubActionsEnterprise(
  {
    enterprise,
    selected_organization_ids,
  }
);
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
    <tr><td>enterprise</td><td>yes</td><td>

The slug version of the enterprise name. You can also substitute this value with the enterprise id.

</td></tr>
<tr><td>selected_organization_ids</td><td>yes</td><td>

List of organization IDs to enable for GitHub Actions.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#set-selected-organizations-enabled-for-github-actions-in-an-enterprise).
