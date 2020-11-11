---
name: List selected organizations enabled for GitHub Actions in an enterprise
example: octokit.enterpriseAdmin.listSelectedOrganizationsEnabledGithubActionsEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/actions/permissions/organizations
scope: enterpriseAdmin
type: API method
---

# List selected organizations enabled for GitHub Actions in an enterprise

Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.enterpriseAdmin.listSelectedOrganizationsEnabledGithubActionsEnterprise(
  {
    enterprise,
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/enterprise-admin#list-selected-organizations-enabled-for-github-actions-in-an-enterprise).
