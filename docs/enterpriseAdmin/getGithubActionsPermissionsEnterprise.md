---
name: Get GitHub Actions permissions for an enterprise
example: octokit.rest.enterpriseAdmin.getGithubActionsPermissionsEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/actions/permissions
scope: enterpriseAdmin
type: API method
---

# Get GitHub Actions permissions for an enterprise

Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.rest.enterpriseAdmin.getGithubActionsPermissionsEnterprise({
  enterprise,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/enterprise-admin#get-github-actions-permissions-for-an-enterprise).
