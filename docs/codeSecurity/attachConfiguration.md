---
name: Attach a configuration to repositories
example: octokit.rest.codeSecurity.attachConfiguration({ org, configuration_id, scope })
route: POST /orgs/{org}/code-security/configurations/{configuration_id}/attach
scope: codeSecurity
type: API method
---

# Attach a configuration to repositories

Attach a code security configuration to a set of repositories. If the repositories specified are already attached to a configuration, they will be re-attached to the provided configuration.

If insufficient GHAS licenses are available to attach the configuration to a repository, only free features will be enabled.

The authenticated user must be an administrator or security manager for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.

```js
octokit.rest.codeSecurity.attachConfiguration({
  org,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>configuration_id</td><td>yes</td><td>

The unique identifier of the code security configuration.

</td></tr>
<tr><td>scope</td><td>yes</td><td>

The type of repositories to attach the configuration to. `selected` means the configuration will be attached to only the repositories specified by `selected_repository_ids`

</td></tr>
<tr><td>selected_repository_ids</td><td>no</td><td>

An array of repository IDs to attach the configuration to. You can only provide a list of repository ids when the `scope` is set to `selected`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-security/configurations#attach-a-configuration-to-repositories).
