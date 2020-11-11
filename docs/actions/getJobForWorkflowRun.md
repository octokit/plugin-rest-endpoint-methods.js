---
name: Get a job for a workflow run
example: octokit.actions.getJobForWorkflowRun({ owner, repo, job_id })
route: GET /repos/{owner}/{repo}/actions/jobs/{job_id}
scope: actions
type: API method
---

# Get a job for a workflow run

Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

```js
octokit.actions.getJobForWorkflowRun({
  owner,
  repo,
  job_id
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
<tr><td>job_id</td><td>yes</td><td>

job_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#get-a-job-for-a-workflow-run).
