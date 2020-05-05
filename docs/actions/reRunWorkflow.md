---
name: Re-run a workflow
example: octokit.actions.reRunWorkflow({ owner, repo, run_id })
route: POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun
scope: actions
type: API method
---

# Re-run a workflow

Re-runs your workflow run using its `id`. Anyone with write access to the repository and an access token with the `repo` scope can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.

```js
octokit.actions.reRunWorkflow({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/workflow-runs/#re-run-a-workflow).
