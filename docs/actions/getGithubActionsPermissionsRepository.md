---
name: Get GitHub Actions permissions for a repository
example: octokit.actions.getGithubActionsPermissionsRepository({ owner, repo })
route: GET /repos/{owner}/{repo}/actions/permissions
scope: actions
type: API method
---

# Get GitHub Actions permissions for a repository

Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions allowed to run in the repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint. GitHub Apps must have the `administration` repository permission to use this API.

```js
octokit.actions.getGithubActionsPermissionsRepository({
  owner,
  repo
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-a-repository).
