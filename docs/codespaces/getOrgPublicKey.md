---
name: Get an organization public key
example: octokit.rest.codespaces.getOrgPublicKey({ org })
route: GET /organizations/{org}/codespaces/secrets/public-key
scope: codespaces
type: API method
---

# Get an organization public key

Gets a public key for an organization, which is required in order to encrypt secrets. You need to encrypt the value of a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.rest.codespaces.getOrgPublicKey({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codespaces#get-an-organization-public-key).
