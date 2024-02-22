---
name: Delete a secret for the authenticated user
example: octokit.rest.codespaces.deleteSecretForAuthenticatedUser({ secret_name })
route: DELETE /user/codespaces/secrets/{secret_name}
scope: codespaces
type: API method
---

# Delete a secret for the authenticated user

Deletes a development environment secret from a user's codespaces using the secret name. Deleting the secret will remove access from all codespaces that were allowed to access the secret.

The authenticated user must have Codespaces access to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/secrets#delete-a-secret-for-the-authenticated-user).
