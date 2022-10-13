---
name: Set selected repositories for a user secret
example: octokit.rest.codespaces.setRepositoriesForSecretForAuthenticatedUser({ secret_name, selected_repository_ids })
route: PUT /user/codespaces/secrets/{secret_name}/repositories
scope: codespaces
type: API method
---

# Set selected repositories for a user secret

Select the repositories that will use a user's codespace secret.

You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.

GitHub Apps must have write access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.

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

An array of repository ids for which a codespace can access the secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/reference/codespaces#list-selected-repositories-for-a-user-secret), [Add a selected repository to a user secret](https://docs.github.com/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) endpoints.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codespaces#set-selected-repositories-for-a-user-secret).
