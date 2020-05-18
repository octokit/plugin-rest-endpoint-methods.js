---
name: Create or update a repository secret
example: octokit.actions.createOrUpdateSecretForRepo({ owner, repo, secret_name })
route: PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}
scope: actions
type: API method
---

# Create or update a repository secret

**Deprecated:** This method has been renamed to actions.createOrUpdateRepoSecret

Creates or updates a repository secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```js
octokit.actions.createOrUpdateSecretForRepo({
  owner,
  repo,
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
    <tr><td>owner</td><td>yes</td><td>

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>secret_name</td><td>yes</td><td>

</td></tr>
<tr><td>encrypted_value</td><td>no</td><td>

Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://developer.github.com/v3/actions/secrets/#get-a-repository-public-key) endpoint.

</td></tr>
<tr><td>key_id</td><td>no</td><td>

ID of the key you used to encrypt the secret.

</td></tr>
<tr><td>name</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/secrets/#create-or-update-a-repository-secret).
