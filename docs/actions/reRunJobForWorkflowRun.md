---
name: Re-run a job from a workflow run
example: octokit.rest.actions.reRunJobForWorkflowRun({ owner, repo, job_id })
route: POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun
scope: actions
type: API method
---

# Re-run a job from a workflow run

Re-run a job and its dependent jobs in a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

```js
octokit.rest.actions.reRunJobForWorkflowRun({
  owner,
  repo,
  job_id,
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
<tr><td>job_id</td><td>yes</td><td>

The unique identifier of the job.

</td></tr>
<tr><td>enable_debug_logging</td><td>no</td><td>

Whether to enable debug logging for the re-run.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#re-run-job-for-workflow-run).
