---
name: Re-run failed jobs from a workflow run
example: octokit.rest.actions.reRunWorkflowFailedJobs({ owner, repo, run_id })
route: POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs
scope: actions
type: API method
---

# Re-run failed jobs from a workflow run

Re-run all of the failed jobs and their dependent jobs in a workflow run using the `id` of the workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint.

```js
octokit.rest.actions.reRunWorkflowFailedJobs({
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>run_id</td><td>yes</td><td>

The unique identifier of the workflow run.

</td></tr>
<tr><td>enable_debug_logging</td><td>no</td><td>

Whether to enable debug logging for the re-run.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#re-run-workflow-failed-jobs).
