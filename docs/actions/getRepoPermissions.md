---
name: Get a repository's Actions permissions
example: octokit.actions.getRepoPermissions({ owner, repo })
route: GET /repos/{owner}/{repo}/actions/permissions
scope: actions
type: API method
---

# Get a repository's Actions permissions

Gets the repository's permissions for running GitHub Actions. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the full `repo` permission to use this endpoint.

```js
octokit.actions.getRepoPermissions({
  owner,
  repo,
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
    <tr><td>owner</td><td>yes</td><td>

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation]().
