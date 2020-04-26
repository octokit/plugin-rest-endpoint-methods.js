---
name: Get a workflow run
example: octokit.actions.getWorkflowRun({ owner, repo, run_id })
route: GET /repos/{owner}/{repo}/actions/runs/{run_id}
scope: actions
type: API method
---

# Get a workflow run

Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.

```js
octokit.actions.getWorkflowRun({
  owner,
  repo,
  run_id,
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>run_id</td><td>yes</td><td>

run_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/workflow-runs/#get-a-workflow-run).
