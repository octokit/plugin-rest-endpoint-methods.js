---
name: Set allowed actions for an enterprise
example: octokit.enterpriseAdmin.setAllowedActionsEnterprise({ enterprise })
route: PUT /enterprises/{enterprise}/actions/permissions/selected-actions
scope: enterpriseAdmin
type: API method
---

# Set allowed actions for an enterprise

Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.enterpriseAdmin.setAllowedActionsEnterprise({
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
<tr><td>github_owned_allowed</td><td>no</td><td>

Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.

</td></tr>
<tr><td>verified_allowed</td><td>no</td><td>

Whether actions in GitHub Marketplace from verified creators are allowed. Set to `true` to allow all GitHub Marketplace actions by verified creators.

</td></tr>
<tr><td>patterns_allowed</td><td>no</td><td>

Specifies a list of string-matching patterns to allow specific action(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/enterprise-admin#set-allowed-actions-for-an-enterprise).
