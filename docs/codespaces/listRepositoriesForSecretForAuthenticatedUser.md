---
name: List selected repositories for a user secret
example: octokit.rest.codespaces.listRepositoriesForSecretForAuthenticatedUser({ secret_name })
route: GET /user/codespaces/secrets/{secret_name}/repositories
scope: codespaces
type: API method
---

# List selected repositories for a user secret

List the repositories that have been granted the ability to use a user's development environment secret.

The authenticated user must have Codespaces access to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

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
