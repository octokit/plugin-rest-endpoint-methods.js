---
name: Set a code security configuration as a default for an organization
example: octokit.rest.codeSecurity.setConfigurationAsDefault({ org, configuration_id })
route: PUT /orgs/{org}/code-security/configurations/{configuration_id}/defaults
scope: codeSecurity
type: API method
---

# Set a code security configuration as a default for an organization

Sets a code security configuration as a default to be applied to new repositories in your organization.

This configuration will be applied to the matching repository type (all, none, public, private and internal) by default when they are created.

The authenticated user must be an administrator or security manager for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.

```js
octokit.rest.codeSecurity.setConfigurationAsDefault({
  org,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>configuration_id</td><td>yes</td><td>

The unique identifier of the code security configuration.

</td></tr>
<tr><td>default_for_new_repos</td><td>no</td><td>

Specify which types of repository this security configuration should be applied to by default.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-security/configurations#set-a-code-security-configuration-as-a-default-for-an-organization).
