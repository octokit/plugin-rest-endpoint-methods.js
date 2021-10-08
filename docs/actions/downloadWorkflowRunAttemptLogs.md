---
name: Download workflow run attempt logs
example: octokit.rest.actions.downloadWorkflowRunAttemptLogs({ owner, repo, run_id, attempt_number })
route: GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs
scope: actions
type: API method
---

# Download workflow run attempt logs

Gets a redirect URL to download an archive of log files for a specific workflow run attempt. This link expires after
1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to
the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
GitHub Apps must have the `actions:read` permission to use this endpoint.

```js
octokit.rest.actions.downloadWorkflowRunAttemptLogs({
  owner,
  repo,
  run_id,
  attempt_number,
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

The id of the workflow run.

</td></tr>
<tr><td>attempt_number</td><td>yes</td><td>

The attempt number of the workflow run.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#download-workflow-run-attempt-logs).
