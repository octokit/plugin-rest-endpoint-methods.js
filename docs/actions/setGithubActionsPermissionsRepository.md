---
name: Set GitHub Actions permissions for a repository
example: octokit.actions.setGithubActionsPermissionsRepository({ owner, repo, enabled })
route: PUT /repos/{owner}/{repo}/actions/permissions
scope: actions
type: API method
---

# Set GitHub Actions permissions for a repository

Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions in the repository.

If the repository belongs to an organization or enterprise that has set restrictive permissions at the organization or enterprise levels, such as `allowed_actions` to `selected` actions, then you cannot override them for the repository.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

```js
octokit.actions.setGithubActionsPermissionsRepository({
  owner,
  repo,
  enabled
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
<tr><td>enabled</td><td>yes</td><td>

Whether GitHub Actions is enabled on the repository.

</td></tr>
<tr><td>allowed_actions</td><td>no</td><td>

The permissions policy that controls the actions that are allowed to run. Can be one of: `all`, `local_only`, or `selected`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-a-repository).
