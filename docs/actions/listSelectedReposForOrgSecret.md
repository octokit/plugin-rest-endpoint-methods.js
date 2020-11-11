---
name: List selected repositories for an organization secret
example: octokit.actions.listSelectedReposForOrgSecret({ org, secret_name })
route: GET /orgs/{org}/actions/secrets/{secret_name}/repositories
scope: actions
type: API method
---

# List selected repositories for an organization secret

Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

```js
octokit.actions.listSelectedReposForOrgSecret({
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

secret_name parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#list-selected-repositories-for-an-organization-secret).
