---
name: Remove a selected repository from a user secret
example: octokit.rest.codespaces.removeRepositoryForSecretForAuthenticatedUser({ secret_name, repository_id })
route: DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}
scope: codespaces
type: API method
---

# Remove a selected repository from a user secret

Removes a repository from the selected repositories for a user's development environment secret.

The authenticated user must have Codespaces access to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

```js
octokit.rest.codespaces.removeRepositoryForSecretForAuthenticatedUser({
  secret_name,
  repository_id,
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
    <tr><td>secret_name</td><td>yes</td><td>

The name of the secret.

</td></tr>
<tr><td>repository_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/secrets#remove-a-selected-repository-from-a-user-secret).
