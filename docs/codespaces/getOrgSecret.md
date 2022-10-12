---
name: Get an organization secret
example: octokit.rest.codespaces.getOrgSecret({ org, secret_name })
route: GET /organizations/{org}/codespaces/secrets/{secret_name}
scope: codespaces
type: API method
---

# Get an organization secret

Gets an organization secret without revealing its encrypted value.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.rest.codespaces.getOrgSecret({
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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>secret_name</td><td>yes</td><td>

The name of the secret.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#get-an-organization-secret).
