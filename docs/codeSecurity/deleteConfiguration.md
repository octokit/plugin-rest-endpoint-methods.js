---
name: Delete a code security configuration
example: octokit.rest.codeSecurity.deleteConfiguration({ org, configuration_id })
route: DELETE /orgs/{org}/code-security/configurations/{configuration_id}
scope: codeSecurity
type: API method
---

# Delete a code security configuration

Deletes the desired code security configuration from an organization.
Repositories attached to the configuration will retain their settings but will no longer be associated with
the configuration.

The authenticated user must be an administrator or security manager for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.

```js
octokit.rest.codeSecurity.deleteConfiguration({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-security/configurations#delete-a-code-security-configuration).
