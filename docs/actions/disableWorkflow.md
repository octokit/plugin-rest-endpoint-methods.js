---
name: Disable a workflow
example: octokit.rest.actions.disableWorkflow({ owner, repo, workflow_id })
route: PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable
scope: actions
type: API method
---

# Disable a workflow

Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.actions.disableWorkflow({
  owner,
  repo,
  workflow_id,
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
<tr><td>workflow_id</td><td>yes</td><td>

The ID of the workflow. You can also pass the workflow file name as a string.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/workflows#disable-a-workflow).
