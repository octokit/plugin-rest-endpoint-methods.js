---
name: Get code security and analysis features for an enterprise
example: octokit.rest.secretScanning.getSecurityAnalysisSettingsForEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/code_security_and_analysis
scope: secretScanning
type: API method
---

# Get code security and analysis features for an enterprise

Gets code security and analysis settings for the specified enterprise.
To use this endpoint, you must be an administrator of the enterprise, and you must use an access token with the `admin:enterprise` scope.

```js
octokit.rest.secretScanning.getSecurityAnalysisSettingsForEnterprise({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/enterprise-admin#get-code-security-analysis-features-for-an-enterprise).
