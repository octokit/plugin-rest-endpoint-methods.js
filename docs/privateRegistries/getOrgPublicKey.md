---
name: Get private registries public key for an organization
example: octokit.rest.privateRegistries.getOrgPublicKey({ org })
route: GET /orgs/{org}/private-registries/public-key
scope: privateRegistries
type: API method
---

# Get private registries public key for an organization

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Gets the org public key, which is needed to encrypt private registry secrets. You need to encrypt a secret before you can create or update secrets.

OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.privateRegistries.getOrgPublicKey({
  org,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/private-registries/organization-configurations#get-private-registries-public-key-for-an-organization).
