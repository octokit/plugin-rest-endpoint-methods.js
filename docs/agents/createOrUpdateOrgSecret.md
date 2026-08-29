---

name: Create or update an organization secret
example: octokit.rest.agents.createOrUpdateOrgSecret({ org, secret_name, encrypted_value, key_id, visibility })
route: PUT /orgs/{org}/agents/secrets/{secret_name}
scope: agents
type: API method
---

# Create or update an organization secret

Creates or updates an organization secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."

Authenticated users must have collaborator access to a repository to create, update, or read secrets.

OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.agents.createOrUpdateOrgSecret({
  org,
  secret_name,
  encrypted_value,
  key_id,
  visibility,
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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>secret_name</td><td>yes</td><td>

The name of the secret.

</td></tr>
<tr><td>encrypted_value</td><td>yes</td><td>

Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/agents/secrets#get-an-organization-public-key) endpoint.

</td></tr>
<tr><td>key_id</td><td>yes</td><td>

ID of the key you used to encrypt the secret.

</td></tr>
<tr><td>visibility</td><td>yes</td><td>

Which type of organization repositories have access to the organization secret. `selected` means only the repositories specified by `selected_repository_ids` can access the secret.

</td></tr>
<tr><td>selected_repository_ids</td><td>no</td><td>

An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/agents/secrets#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/agents/secrets#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/agents/secrets#remove-selected-repository-from-an-organization-secret) endpoints.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/agents/secrets#create-or-update-an-organization-secret).
