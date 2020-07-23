---
name: Create a workflow dispatch event
example: octokit.actions.createWorkflowDispatch({ owner, repo, workflow_id, ref })
route: POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches
scope: actions
type: API method
---

# Create a workflow dispatch event

You can use this endpoint to manually trigger a GitHub Actions workflow run. You can also replace `{workflow_id}` with the workflow file name. For example, you could use `main.yml`.

You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line)."

```js
octokit.actions.createWorkflowDispatch({
  owner,
  repo,
  workflow_id,
  ref,
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
<tr><td>workflow_id</td><td>yes</td><td>

</td></tr>
<tr><td>ref</td><td>yes</td><td>

The reference of the workflow run. The reference can be a branch, tag, or a commit SHA.

</td></tr>
<tr><td>inputs</td><td>no</td><td>

Input keys and values configured in the workflow file. The maximum number of properties is 10.

</td></tr>
<tr><td>inputs.*</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/workflows/#create-a-workflow-dispatch-event).
