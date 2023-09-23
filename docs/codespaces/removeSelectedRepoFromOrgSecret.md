---
name: Remove selected repository from an organization secret
example: octokit.rest.codespaces.removeSelectedRepoFromOrgSecret({ org, secret_name, repository_id })
route: DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}
scope: codespaces
type: API method
---

# Remove selected repository from an organization secret

Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/codespaces/organization-secrets#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.rest.codespaces.removeSelectedRepoFromOrgSecret({
  org,
  secret_name,
  repository_id,
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
<tr><td>repository_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/organization-secrets#remove-selected-repository-from-an-organization-secret).
