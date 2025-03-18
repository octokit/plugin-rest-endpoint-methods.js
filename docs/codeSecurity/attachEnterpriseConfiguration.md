---
name: Attach an enterprise configuration to repositories
example: octokit.rest.codeSecurity.attachEnterpriseConfiguration({ enterprise, configuration_id, scope })
route: POST /enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach
scope: codeSecurity
type: API method
---

# Attach an enterprise configuration to repositories

Attaches an enterprise code security configuration to repositories. If the repositories specified are already attached to a configuration, they will be re-attached to the provided configuration.

If insufficient GHAS licenses are available to attach the configuration to a repository, only free features will be enabled.

The authenticated user must be an administrator for the enterprise to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```js
octokit.rest.codeSecurity.attachEnterpriseConfiguration({
  enterprise,
  configuration_id,
  scope,
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
<tr><td>scope</td><td>yes</td><td>

The type of repositories to attach the configuration to.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-security/configurations#attach-an-enterprise-configuration-to-repositories).
