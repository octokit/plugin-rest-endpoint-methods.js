---
name: Get a required workflow
example: octokit.rest.actions.getRequiredWorkflow({ org, required_workflow_id })
route: GET /orgs/{org}/actions/required_workflows/{required_workflow_id}
scope: actions
type: API method
---

# Get a required workflow

Get a required workflow configured in an organization.

You must authenticate using an access token with the `read:org` scope to use this endpoint.

For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

```js
octokit.rest.actions.getRequiredWorkflow({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#get-a-required-workflow).
