---
name: Sets repositories for a required workflow
example: octokit.rest.actions.setSelectedReposToRequiredWorkflow({ org, required_workflow_id, selected_repository_ids })
route: PUT /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories
scope: actions
type: API method
---

# Sets repositories for a required workflow

Sets the repositories for a required workflow that is required for selected repositories.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

```js
octokit.rest.actions.setSelectedReposToRequiredWorkflow({
  org,
  required_workflow_id,
  selected_repository_ids,
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
<tr><td>selected_repository_ids</td><td>yes</td><td>

The IDs of the repositories for which the workflow should be required.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#set-selected-repositories-for-a-required-workflow).
