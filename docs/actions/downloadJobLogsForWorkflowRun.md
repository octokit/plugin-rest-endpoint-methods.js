---
name: Download job logs for a workflow run
example: octokit.rest.actions.downloadJobLogsForWorkflowRun({ owner, repo, job_id })
route: GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs
scope: actions
type: API method
---

# Download job logs for a workflow run

Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
have the `actions:read` permission to use this endpoint.

```js
octokit.rest.actions.downloadJobLogsForWorkflowRun({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>job_id</td><td>yes</td><td>

The unique identifier of the job.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#download-job-logs-for-a-workflow-run).
