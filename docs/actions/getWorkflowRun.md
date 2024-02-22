---
name: Get a workflow run
example: octokit.rest.actions.getWorkflowRun({ owner, repo, run_id })
route: GET /repos/{owner}/{repo}/actions/runs/{run_id}
scope: actions
type: API method
---

# Get a workflow run

Gets a specific workflow run.

Anyone with read access to the repository can use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>run_id</td><td>yes</td><td>

The unique identifier of the workflow run.

</td></tr>
<tr><td>exclude_pull_requests</td><td>no</td><td>

If `true` pull requests are omitted from the response (empty array).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/workflow-runs#get-a-workflow-run).
