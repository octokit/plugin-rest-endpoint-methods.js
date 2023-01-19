---
name: Set the level of access for workflows outside of the repository
example: octokit.rest.actions.setWorkflowAccessToRepository({ owner, repo, access_level })
route: PUT /repos/{owner}/{repo}/actions/permissions/access
scope: actions
type: API method
---

# Set the level of access for workflows outside of the repository

Sets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.
This endpoint only applies to private repositories.
For more information, see "[Allowing access to components in a private repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)".

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the
repository `administration` permission to use this endpoint.

```js
octokit.rest.actions.setWorkflowAccessToRepository({
  owner,
  repo,
  access_level,
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>access_level</td><td>yes</td><td>

Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the
repository.

`none` means the access is only possible from workflows in this repository. `user` level access allows sharing across user owned private repos only. `organization` level access allows sharing across the organization. `enterprise` level access allows sharing across the enterprise.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#set-workflow-access-to-a-repository).
