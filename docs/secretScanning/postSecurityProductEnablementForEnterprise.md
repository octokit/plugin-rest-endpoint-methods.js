---
name: Enable or disable a security feature
example: octokit.rest.secretScanning.postSecurityProductEnablementForEnterprise({ enterprise, security_product, enablement })
route: POST /enterprises/{enterprise}/{security_product}/{enablement}
scope: secretScanning
type: API method
---

# Enable or disable a security feature

Enables or disables the specified security feature for all repositories in an enterprise.

To use this endpoint, you must be an administrator of the enterprise, and you must use an access token with the `admin:enterprise` scope.

```js
octokit.rest.secretScanning.postSecurityProductEnablementForEnterprise({
  enterprise,
  security_product,
  enablement,
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
<tr><td>security_product</td><td>yes</td><td>

The security feature to enable or disable.

</td></tr>
<tr><td>enablement</td><td>yes</td><td>

The action to take.

`enable_all` means to enable the specified security feature for all repositories in the enterprise.
`disable_all` means to disable the specified security feature for all repositories in the enterprise.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/enterprise-admin#enable-or-disable-a-security-feature).
