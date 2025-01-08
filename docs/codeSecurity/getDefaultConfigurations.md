---
name: Get default code security configurations
example: octokit.rest.codeSecurity.getDefaultConfigurations({ org })
route: GET /orgs/{org}/code-security/configurations/defaults
scope: codeSecurity
type: API method
---

# Get default code security configurations

Lists the default code security configurations for an organization.

The authenticated user must be an administrator or security manager for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.

```js
octokit.rest.codeSecurity.getDefaultConfigurations({
  org,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-security/configurations#get-default-code-security-configurations).
