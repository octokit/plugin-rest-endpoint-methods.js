---
name: List secrets for the authenticated user
example: octokit.rest.codespaces.listSecretsForAuthenticatedUser()
route: GET /user/codespaces/secrets
scope: codespaces
type: API method
---

# List secrets for the authenticated user

Lists all development environment secrets available for a user's codespaces without revealing their
encrypted values.

The authenticated user must have Codespaces access to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

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

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/secrets#list-secrets-for-the-authenticated-user).
