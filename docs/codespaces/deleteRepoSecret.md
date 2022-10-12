---
name: Delete a repository secret
example: octokit.rest.codespaces.deleteRepoSecret({ owner, repo, secret_name })
route: DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}
scope: codespaces
type: API method
---

# Delete a repository secret

Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `codespaces_secrets` repository permission to use this endpoint.

```js
octokit.rest.codespaces.deleteRepoSecret({
  owner,
  repo,
  secret_name,
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>secret_name</td><td>yes</td><td>

The name of the secret.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#delete-a-repository-secret).
