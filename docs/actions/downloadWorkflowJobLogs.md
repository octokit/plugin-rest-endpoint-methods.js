---
name: Download workflow job logs
example: octokit.actions.downloadWorkflowJobLogs({ owner, repo, job_id })
route: GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs
scope: actions
type: API method
---

# Download workflow job logs

Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions` permission to use this endpoint.

Call this endpoint using the `-v` flag, which enables verbose output and allows you to see the download URL in the header. To download the file into the current working directory, specify the filename using the `-o` flag.

```js
octokit.actions.downloadWorkflowJobLogs({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>job_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/workflow-jobs/#download-workflow-job-logs).
