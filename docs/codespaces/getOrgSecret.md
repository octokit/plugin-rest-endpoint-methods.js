---
name: Get an organization secret
example: octokit.rest.codespaces.getOrgSecret({ org, secret_name })
route: GET /orgs/{org}/codespaces/secrets/{secret_name}
scope: codespaces
type: API method
---

# Get an organization secret

Gets an organization development environment secret without revealing its encrypted value.

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/organization-secrets#get-an-organization-secret).
