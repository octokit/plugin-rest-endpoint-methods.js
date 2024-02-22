---
name: List available machine types for a repository
example: octokit.rest.codespaces.repoMachinesForAuthenticatedUser({ owner, repo })
route: GET /repos/{owner}/{repo}/codespaces/machines
scope: codespaces
type: API method
---

# List available machine types for a repository

List the machine types available for a given repository based on its configuration.

OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```js
octokit.rest.codespaces.repoMachinesForAuthenticatedUser({
  owner,
  repo,
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
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>location</td><td>no</td><td>

The location to check for available machines. Assigned by IP if not provided.

</td></tr>
<tr><td>client_ip</td><td>no</td><td>

IP for location auto-detection when proxying a request

</td></tr>
<tr><td>ref</td><td>no</td><td>

The branch or commit to check for prebuild availability and devcontainer restrictions.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/machines#list-available-machine-types-for-a-repository).
