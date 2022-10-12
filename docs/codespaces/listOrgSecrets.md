---
name: List organization secrets
example: octokit.rest.codespaces.listOrgSecrets({ org })
route: GET /organizations/{org}/codespaces/secrets
scope: codespaces
type: API method
---

# List organization secrets

Lists all Codespaces secrets available at the organization-level without revealing their encrypted values.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.rest.codespaces.listOrgSecrets({
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
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#list-organization-secrets).
