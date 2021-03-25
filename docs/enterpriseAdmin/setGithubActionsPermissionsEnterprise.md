---
name: Set GitHub Actions permissions for an enterprise
example: octokit.rest.enterpriseAdmin.setGithubActionsPermissionsEnterprise({ enterprise, enabled_organizations })
route: PUT /enterprises/{enterprise}/actions/permissions
scope: enterpriseAdmin
type: API method
---

# Set GitHub Actions permissions for an enterprise

Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.rest.enterpriseAdmin.setGithubActionsPermissionsEnterprise({
  enterprise,
  enabled_organizations,
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
<tr><td>enabled_organizations</td><td>yes</td><td>

The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions. Can be one of: `all`, `none`, or `selected`.

</td></tr>
<tr><td>allowed_actions</td><td>no</td><td>

The permissions policy that controls the actions that are allowed to run. Can be one of: `all`, `local_only`, or `selected`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/enterprise-admin#set-github-actions-permissions-for-an-enterprise).
