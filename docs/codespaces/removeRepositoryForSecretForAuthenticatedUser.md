---
name: Remove a selected repository from a user secret
example: octokit.rest.codespaces.removeRepositoryForSecretForAuthenticatedUser({ secret_name, repository_id })
route: DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}
scope: codespaces
type: API method
---

# Remove a selected repository from a user secret

Removes a repository from the selected repositories for a user's codespace secret.
You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
GitHub Apps must have write access to the `codespaces_user_secrets` user permission to use this endpoint.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret).
