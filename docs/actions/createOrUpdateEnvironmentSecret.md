---
name: Create or update an environment secret
example: octokit.rest.actions.createOrUpdateEnvironmentSecret({ repository_id, environment_name, secret_name, encrypted_value, key_id })
route: PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}
scope: actions
type: API method
---

# Create or update an environment secret

Creates or updates an environment secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."

You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `secrets` repository permission to use this endpoint.
Authenticated users must have collaborator access to a repository to create, update, or read secrets.

```js
octokit.rest.actions.createOrUpdateEnvironmentSecret({
  repository_id,
  environment_name,
  secret_name,
  encrypted_value,
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
    <tr><td>repository_id</td><td>yes</td><td>

The unique identifier of the repository.

</td></tr>
<tr><td>environment_name</td><td>yes</td><td>

The name of the environment.

</td></tr>
<tr><td>secret_name</td><td>yes</td><td>

The name of the secret.

</td></tr>
<tr><td>encrypted_value</td><td>yes</td><td>

Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/actions/secrets#get-an-environment-public-key) endpoint.

</td></tr>
<tr><td>key_id</td><td>yes</td><td>

ID of the key you used to encrypt the secret.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/secrets#create-or-update-an-environment-secret).
