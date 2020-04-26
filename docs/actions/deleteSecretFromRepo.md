---
name: Delete a secret from a repository
example: octokit.actions.deleteSecretFromRepo({ owner, repo, name })
route: DELETE /repos/{owner}/{repo}/actions/secrets/{name}
scope: actions
type: API method
---

# Delete a secret from a repository

Deletes a secret in a repository using the secret name. Anyone with write access to the repository can use this endpoint. GitHub Apps must have the `secrets` permission to use this endpoint.

```js
octokit.actions.deleteSecretFromRepo({
  owner,
  repo,
  name,
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>name</td><td>yes</td><td>

name parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/secrets/#delete-a-secret-from-a-repository).
