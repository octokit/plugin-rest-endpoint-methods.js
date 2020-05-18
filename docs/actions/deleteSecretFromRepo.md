---
name: Delete a repository secret
example: octokit.actions.deleteSecretFromRepo({ owner, repo, secret_name })
route: DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}
scope: actions
type: API method
---

# Delete a repository secret

**Deprecated:** This method has been renamed to actions.deleteRepoSecret

Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

```js
octokit.actions.deleteSecretFromRepo({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>secret_name</td><td>yes</td><td>

</td></tr>
<tr><td>name</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/secrets/#delete-a-repository-secret).
