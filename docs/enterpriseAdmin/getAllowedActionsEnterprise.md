---
name: Get allowed actions for an enterprise
example: octokit.rest.enterpriseAdmin.getAllowedActionsEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/actions/permissions/selected-actions
scope: enterpriseAdmin
type: API method
---

# Get allowed actions for an enterprise

Gets the selected actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.rest.enterpriseAdmin.getAllowedActionsEnterprise({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/enterprise-admin#get-allowed-actions-for-an-enterprise).
