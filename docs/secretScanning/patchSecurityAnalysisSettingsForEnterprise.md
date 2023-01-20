---
name: Update code security and analysis features for an enterprise
example: octokit.rest.secretScanning.patchSecurityAnalysisSettingsForEnterprise({ enterprise })
route: PATCH /enterprises/{enterprise}/code_security_and_analysis
scope: secretScanning
type: API method
---

# Update code security and analysis features for an enterprise

Updates the settings for advanced security, secret scanning, and push protection for new repositories in an enterprise.
To use this endpoint, you must be an administrator of the enterprise, and you must use an access token with the `admin:enterprise` scope.

```js
octokit.rest.secretScanning.patchSecurityAnalysisSettingsForEnterprise({
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
<tr><td>advanced_security_enabled_for_new_repositories</td><td>no</td><td>

Whether GitHub Advanced Security is automatically enabled for new repositories. For more information, see "[About GitHub Advanced Security](https://docs.github.com/get-started/learning-about-github/about-github-advanced-security)."

</td></tr>
<tr><td>secret_scanning_enabled_for_new_repositories</td><td>no</td><td>

Whether secret scanning is automatically enabled for new repositories. For more information, see "[About secret scanning](https://docs.github.com/code-security/secret-scanning/about-secret-scanning)."

</td></tr>
<tr><td>secret_scanning_push_protection_enabled_for_new_repositories</td><td>no</td><td>

Whether secret scanning push protection is automatically enabled for new repositories. For more information, see "[Protecting pushes with secret scanning](https://docs.github.com/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."

</td></tr>
<tr><td>secret_scanning_push_protection_custom_link</td><td>no</td><td>

The URL that will be displayed to contributors who are blocked from pushing a secret. For more information, see "[Protecting pushes with secret scanning](https://docs.github.com/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
To disable this functionality, set this field to `null`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/enterprise-admin#update-code-security-and-analysis-features-for-an-enterprise).
