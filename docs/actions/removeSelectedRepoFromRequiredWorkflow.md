---
name: Remove a selected repository from required workflow
example: octokit.rest.actions.removeSelectedRepoFromRequiredWorkflow({ org, required_workflow_id, repository_id })
route: DELETE /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}
scope: actions
type: API method
---

# Remove a selected repository from required workflow

Removes a repository from a required workflow. To use this endpoint, the required workflow must be configured to run on selected repositories.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

```js
octokit.rest.actions.removeSelectedRepoFromRequiredWorkflow({
  org,
  required_workflow_id,
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
<tr><td>required_workflow_id</td><td>yes</td><td>

The unique identifier of the required workflow.

</td></tr>
<tr><td>repository_id</td><td>yes</td><td>

The unique identifier of the repository.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#remove-a-repository-from-selected-repositories-list-for-a-required-workflow).
