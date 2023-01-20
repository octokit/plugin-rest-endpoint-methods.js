---
name: List selected repositories for a required workflow
example: octokit.rest.actions.listSelectedRepositoriesRequiredWorkflow({ org, required_workflow_id })
route: GET /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories
scope: actions
type: API method
---

# List selected repositories for a required workflow

Lists the selected repositories that are configured for a required workflow in an organization. To use this endpoint, the required workflow must be configured to run on selected repositories.

You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this endpoint.

For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

```js
octokit.rest.actions.listSelectedRepositoriesRequiredWorkflow({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#list-selected-repositories-required-workflows).
