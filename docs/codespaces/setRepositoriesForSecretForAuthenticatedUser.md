---
name: Set selected repositories for a user secret
example: octokit.rest.codespaces.setRepositoriesForSecretForAuthenticatedUser({ secret_name, selected_repository_ids })
route: PUT /user/codespaces/secrets/{secret_name}/repositories
scope: codespaces
type: API method
---

# Set selected repositories for a user secret

Select the repositories that will use a user's development environment secret.

The authenticated user must have Codespaces access to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

```js
octokit.rest.codespaces.setRepositoriesForSecretForAuthenticatedUser({
  secret_name,
  selected_repository_ids,
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
<tr><td>selected_repository_ids</td><td>yes</td><td>

An array of repository ids for which a codespace can access the secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/codespaces/secrets#list-selected-repositories-for-a-user-secret), [Add a selected repository to a user secret](https://docs.github.com/rest/codespaces/secrets#add-a-selected-repository-to-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/codespaces/secrets#remove-a-selected-repository-from-a-user-secret) endpoints.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/secrets#set-selected-repositories-for-a-user-secret).
