---
name: Delete a code security configuration for an enterprise
example: octokit.rest.codeSecurity.deleteConfigurationForEnterprise({ enterprise, configuration_id })
route: DELETE /enterprises/{enterprise}/code-security/configurations/{configuration_id}
scope: codeSecurity
type: API method
---

# Delete a code security configuration for an enterprise

Deletes a code security configuration from an enterprise.
Repositories attached to the configuration will retain their settings but will no longer be associated with
the configuration.

The authenticated user must be an administrator for the enterprise to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```js
octokit.rest.codeSecurity.deleteConfigurationForEnterprise({
  enterprise,
  configuration_id,
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
<tr><td>configuration_id</td><td>yes</td><td>

The unique identifier of the code security configuration.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-security/configurations#delete-a-code-security-configuration-for-an-enterprise).
