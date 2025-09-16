---
name: Set a code security configuration as a default for an enterprise
example: octokit.rest.codeSecurity.setConfigurationAsDefaultForEnterprise({ enterprise, configuration_id })
route: PUT /enterprises/{enterprise}/code-security/configurations/{configuration_id}/defaults
scope: codeSecurity
type: API method
---

# Set a code security configuration as a default for an enterprise

Sets a code security configuration as a default to be applied to new repositories in your enterprise.

This configuration will be applied by default to the matching repository type when created, but only for organizations within the enterprise that do not already have a default code security configuration set.

The authenticated user must be an administrator for the enterprise to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```js
octokit.rest.codeSecurity.setConfigurationAsDefaultForEnterprise({
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
<tr><td>default_for_new_repos</td><td>no</td><td>

Specify which types of repository this security configuration should be applied to by default.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-security/configurations#set-a-code-security-configuration-as-a-default-for-an-enterprise).
