---
name: List selected repositories for a user secret
example: octokit.rest.codespaces.listRepositoriesForSecretForAuthenticatedUser({ secret_name })
route: GET /user/codespaces/secrets/{secret_name}/repositories
scope: codespaces
type: API method
---

# List selected repositories for a user secret

List the repositories that have been granted the ability to use a user's codespace secret.

You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.

GitHub Apps must have read access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.

```js
octokit.rest.codespaces.listRepositoriesForSecretForAuthenticatedUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/secrets#list-selected-repositories-for-a-user-secret).
