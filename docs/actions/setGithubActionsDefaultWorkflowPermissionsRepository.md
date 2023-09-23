---
name: Set default workflow permissions for a repository
example: octokit.rest.actions.setGithubActionsDefaultWorkflowPermissionsRepository({ owner, repo })
route: PUT /repos/{owner}/{repo}/actions/permissions/workflow
scope: actions
type: API method
---

# Set default workflow permissions for a repository

Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository, and sets if GitHub Actions
can submit approving pull request reviews.
For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the repository `administration` permission to use this API.

```js
octokit.rest.actions.setGithubActionsDefaultWorkflowPermissionsRepository({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>default_workflow_permissions</td><td>no</td><td>

The default workflow permissions granted to the GITHUB_TOKEN when running workflows.

</td></tr>
<tr><td>can_approve_pull_request_reviews</td><td>no</td><td>

Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/permissions#set-default-workflow-permissions-for-a-repository).
