---
name: Get default code security configurations for an enterprise
example: octokit.rest.codeSecurity.getDefaultConfigurationsForEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/code-security/configurations/defaults
scope: codeSecurity
type: API method
---

# Get default code security configurations for an enterprise

Lists the default code security configurations for an enterprise.

The authenticated user must be an administrator of the enterprise in order to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint.

```js
octokit.rest.codeSecurity.getDefaultConfigurationsForEnterprise({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-security/configurations#get-default-code-security-configurations-for-an-enterprise).
