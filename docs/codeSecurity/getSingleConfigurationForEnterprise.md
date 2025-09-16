---
name: Retrieve a code security configuration of an enterprise
example: octokit.rest.codeSecurity.getSingleConfigurationForEnterprise({ enterprise, configuration_id })
route: GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}
scope: codeSecurity
type: API method
---

# Retrieve a code security configuration of an enterprise

Gets a code security configuration available in an enterprise.

The authenticated user must be an administrator of the enterprise in order to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint.

```js
octokit.rest.codeSecurity.getSingleConfigurationForEnterprise({
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

The slug version of the enterprise name.

</td></tr>
<tr><td>configuration_id</td><td>yes</td><td>

The unique identifier of the code security configuration.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-security/configurations#retrieve-a-code-security-configuration-of-an-enterprise).
