---
name: Delete a secret for the authenticated user
example: octokit.rest.codespaces.deleteSecretForAuthenticatedUser({ secret_name })
route: DELETE /user/codespaces/secrets/{secret_name}
scope: codespaces
type: API method
---

# Delete a secret for the authenticated user

Deletes a secret from a user's codespaces using the secret name. Deleting the secret will remove access from all codespaces that were allowed to access the secret.

You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.

GitHub Apps must have write access to the `codespaces_user_secrets` user permission to use this endpoint.

```js
octokit.rest.codespaces.deleteSecretForAuthenticatedUser({
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
    <tr><td>secret_name</td><td>yes</td><td>

The name of the secret.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codespaces#delete-a-secret-for-the-authenticated-user).
