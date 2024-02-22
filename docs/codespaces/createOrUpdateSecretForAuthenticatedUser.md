---
name: Create or update a secret for the authenticated user
example: octokit.rest.codespaces.createOrUpdateSecretForAuthenticatedUser({ secret_name, key_id })
route: PUT /user/codespaces/secrets/{secret_name}
scope: codespaces
type: API method
---

# Create or update a secret for the authenticated user

Creates or updates a development environment secret for a user's codespace with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."

The authenticated user must have Codespaces access to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

```js
octokit.rest.codespaces.createOrUpdateSecretForAuthenticatedUser({
  secret_name,
  key_id,
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
<tr><td>encrypted_value</td><td>no</td><td>

Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get the public key for the authenticated user](https://docs.github.com/rest/codespaces/secrets#get-public-key-for-the-authenticated-user) endpoint.

</td></tr>
<tr><td>key_id</td><td>yes</td><td>

ID of the key you used to encrypt the secret.

</td></tr>
<tr><td>selected_repository_ids</td><td>no</td><td>

An array of repository ids that can access the user secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/codespaces/secrets#list-selected-repositories-for-a-user-secret), [Set selected repositories for a user secret](https://docs.github.com/rest/codespaces/secrets#set-selected-repositories-for-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/codespaces/secrets#remove-a-selected-repository-from-a-user-secret) endpoints.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/secrets#create-or-update-a-secret-for-the-authenticated-user).
