---
name: List jobs for a workflow run
example: octokit.actions.listJobsForWorkflowRun({ owner, repo, run_id })
route: GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs
scope: actions
type: API method
---

# List jobs for a workflow run

Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).

```js
octokit.actions.listJobsForWorkflowRun({
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
<tr><td>filter</td><td>no</td><td>

Filters jobs by their `completed_at` timestamp. Can be one of:  
\* `latest`: Returns jobs from the most recent execution of the workflow run.  
\* `all`: Returns all jobs for a workflow run, including from old executions of the workflow run.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/workflow-jobs/#list-jobs-for-a-workflow-run).
