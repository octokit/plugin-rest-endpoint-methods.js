---
name: Enable a selected organization for GitHub Actions in an enterprise
example: octokit.enterpriseAdmin.enableSelectedOrganizationGithubActionsEnterprise({ enterprise, org_id })
route: PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}
scope: enterpriseAdmin
type: API method
---

# Enable a selected organization for GitHub Actions in an enterprise

Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.enterpriseAdmin.enableSelectedOrganizationGithubActionsEnterprise({
  enterprise,
  org_id
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
    <tr><td>enterprise</td><td>yes</td><td>

The slug version of the enterprise name. You can also substitute this value with the enterprise id.

</td></tr>
<tr><td>org_id</td><td>yes</td><td>

Unique identifier of an organization.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/enterprise-admin#enable-a-selected-organization-for-github-actions-in-an-enterprise).
