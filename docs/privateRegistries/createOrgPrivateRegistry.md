---
name: Create a private registry for an organization
example: octokit.rest.privateRegistries.createOrgPrivateRegistry({ org, registry_type, encrypted_value, key_id, visibility })
route: POST /orgs/{org}/private-registries
scope: privateRegistries
type: API method
---

# Create a private registry for an organization

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Creates a private registry configuration with an encrypted value for an organization. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.privateRegistries.createOrgPrivateRegistry({
  org,
  registry_type,
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
<tr><td>registry_type</td><td>yes</td><td>

The registry type.

</td></tr>
<tr><td>username</td><td>no</td><td>

The username to use when authenticating with the private registry. This field should be omitted if the private registry does not require a username for authentication.

</td></tr>
<tr><td>encrypted_value</td><td>yes</td><td>

The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/rest/private-registries/organization-configurations#get-private-registries-public-key-for-an-organization) endpoint.

</td></tr>
<tr><td>key_id</td><td>yes</td><td>

The ID of the key you used to encrypt the secret.

</td></tr>
<tr><td>visibility</td><td>yes</td><td>

Which type of organization repositories have access to the private registry. `selected` means only the repositories specified by `selected_repository_ids` can access the private registry.

</td></tr>
<tr><td>selected_repository_ids</td><td>no</td><td>

An array of repository IDs that can access the organization private registry. You can only provide a list of repository IDs when `visibility` is set to `selected`. You can manage the list of selected repositories using the [Update a private registry for an organization](https://docs.github.com/rest/private-registries/organization-configurations#update-a-private-registry-for-an-organization) endpoint. This field should be omitted if `visibility` is set to `all` or `private`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/private-registries/organization-configurations#create-a-private-registry-for-an-organization).
