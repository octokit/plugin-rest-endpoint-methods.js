---
name: Remove selected repository from an organization secret
example: octokit.actions.removeSelectedRepoFromOrgSecret({ org, secret_name, repository_id })
route: DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}
scope: actions
type: API method
---

# Remove selected repository from an organization secret

Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

```js
octokit.actions.removeSelectedRepoFromOrgSecret({
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

</td></tr>
<tr><td>secret_name</td><td>yes</td><td>

</td></tr>
<tr><td>repository_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/secrets/#remove-selected-repository-from-an-organization-secret).
