---
name: Create or update an organization secret
example: octokit.actions.createOrUpdateOrgSecret({ org, secret_name })
route: PUT /orgs/{org}/actions/secrets/{secret_name}
scope: actions
type: API method
---

# Create or update an organization secret

Creates or updates an organization secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```js
octokit.actions.createOrUpdateOrgSecret({
  org,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>secret_name</td><td>yes</td><td>

</td></tr>
<tr><td>encrypted_value</td><td>no</td><td>

Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://developer.github.com/v3/actions/secrets/#get-an-organization-public-key) endpoint.

</td></tr>
<tr><td>key_id</td><td>no</td><td>

ID of the key you used to encrypt the secret.

</td></tr>
<tr><td>visibility</td><td>no</td><td>

Configures the access that repositories have to the organization secret. Can be one of:  
\- `all` - All repositories in an organization can access the secret.  
\- `private` - Private repositories in an organization can access the secret.  
\- `selected` - Only specific repositories can access the secret.

</td></tr>
<tr><td>selected_repository_ids</td><td>no</td><td>

An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://developer.github.com/v3/actions/secrets/#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://developer.github.com/v3/actions/secrets/#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://developer.github.com/v3/actions/secrets/#remove-selected-repository-from-an-organization-secret) endpoints.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret).
