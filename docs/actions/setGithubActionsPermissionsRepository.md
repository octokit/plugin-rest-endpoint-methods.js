---
name: Set GitHub Actions permissions for a repository
example: octokit.rest.actions.setGithubActionsPermissionsRepository({ owner, repo, enabled })
route: PUT /repos/{owner}/{repo}/actions/permissions
scope: actions
type: API method
---

# Set GitHub Actions permissions for a repository

Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions and reusable workflows in the repository.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

```js
octokit.rest.actions.setGithubActionsPermissionsRepository({
  owner,
  repo,
  enabled,
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>enabled</td><td>yes</td><td>

Whether GitHub Actions is enabled on the repository.

</td></tr>
<tr><td>allowed_actions</td><td>no</td><td>

The permissions policy that controls the actions and reusable workflows that are allowed to run.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-a-repository).
