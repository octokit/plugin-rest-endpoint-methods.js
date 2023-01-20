---
name: Update a required workflow
example: octokit.rest.actions.updateRequiredWorkflow({ org, required_workflow_id })
route: PATCH /orgs/{org}/actions/required_workflows/{required_workflow_id}
scope: actions
type: API method
---

# Update a required workflow

Update a required workflow in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

```js
octokit.rest.actions.updateRequiredWorkflow({
  org,
  required_workflow_id,
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
<tr><td>workflow_file_path</td><td>no</td><td>

Path of the workflow file to be configured as a required workflow.

</td></tr>
<tr><td>repository_id</td><td>no</td><td>

The ID of the repository that contains the workflow file.

</td></tr>
<tr><td>scope</td><td>no</td><td>

Enable the required workflow for all repositories or selected repositories in the organization.

</td></tr>
<tr><td>selected_repository_ids</td><td>no</td><td>

A list of repository IDs where you want to enable the required workflow. A list of repository IDs where you want to enable the required workflow. You can only provide a list of repository ids when the `scope` is set to `selected`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#update-a-required-workflow).
