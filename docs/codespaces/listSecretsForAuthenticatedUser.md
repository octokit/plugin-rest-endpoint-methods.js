---
name: List secrets for the authenticated user
example: octokit.rest.codespaces.listSecretsForAuthenticatedUser()
route: GET /user/codespaces/secrets
scope: codespaces
type: API method
---

# List secrets for the authenticated user

Lists all secrets available for a user's Codespaces without revealing their
encrypted values.

You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.

GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.

```js
octokit.rest.codespaces.listSecretsForAuthenticatedUser();
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
    <tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-secrets-for-the-authenticated-user).
