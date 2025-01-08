---
name: Detach configurations from repositories
example: octokit.rest.codeSecurity.detachConfiguration({ org })
route: DELETE /orgs/{org}/code-security/configurations/detach
scope: codeSecurity
type: API method
---

# Detach configurations from repositories

Detach code security configuration(s) from a set of repositories.
Repositories will retain their settings but will no longer be associated with the configuration.

The authenticated user must be an administrator or security manager for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.

```js
octokit.rest.codeSecurity.detachConfiguration({
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
<tr><td>selected_repository_ids</td><td>no</td><td>

An array of repository IDs to detach from configurations.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-security/configurations#detach-configurations-from-repositories).
