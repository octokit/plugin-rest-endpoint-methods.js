---
name: Get a workflow run
example: octokit.rest.actions.getWorkflowRun({ owner, repo, run_id })
route: GET /repos/{owner}/{repo}/actions/runs/{run_id}
scope: actions
type: API method
---

# Get a workflow run

Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

```js
octokit.rest.actions.getWorkflowRun({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>run_id</td><td>yes</td><td>

The id of the workflow run

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#get-a-workflow-run).
