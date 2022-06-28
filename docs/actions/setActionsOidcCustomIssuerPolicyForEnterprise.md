---
name: Set the GitHub Actions OIDC custom issuer policy for an enterprise
example: octokit.rest.actions.setActionsOidcCustomIssuerPolicyForEnterprise({ enterprise })
route: PUT /enterprises/{enterprise}/actions/oidc/customization/issuer
scope: actions
type: API method
---

# Set the GitHub Actions OIDC custom issuer policy for an enterprise

Sets the GitHub Actions OpenID Connect (OIDC) custom issuer policy for an enterprise.
You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
GitHub Apps must have the `enterprise_administration:write` permission to use this endpoint.

```js
octokit.rest.actions.setActionsOidcCustomIssuerPolicyForEnterprise({
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
<tr><td>include_enterprise_slug</td><td>no</td><td>

Whether the enterprise customer requested a custom issuer URL.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions/oidc#set-actions-oidc-custom-issuer-policy-for-enterprise).
