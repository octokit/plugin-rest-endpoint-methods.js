---
name: Get a secret for the authenticated user
example: octokit.rest.codespaces.getSecretForAuthenticatedUser({ secret_name })
route: GET /user/codespaces/secrets/{secret_name}
scope: codespaces
type: API method
---

# Get a secret for the authenticated user

Gets a development environment secret available to a user's codespaces without revealing its encrypted value.

The authenticated user must have Codespaces access to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

```js
octokit.rest.codespaces.getSecretForAuthenticatedUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/secrets#get-a-secret-for-the-authenticated-user).
