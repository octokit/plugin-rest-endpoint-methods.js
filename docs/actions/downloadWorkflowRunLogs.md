---
name: Download workflow run logs
example: octokit.actions.downloadWorkflowRunLogs({ owner, repo, run_id })
route: GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs
scope: actions
type: API method
---

# Download workflow run logs

Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions` permission to use this endpoint.

Call this endpoint using the `-v` flag, which enables verbose output and allows you to see the download URL in the header. To download the file into the current working directory, specify the filename using the `-o` flag.

```js
octokit.actions.downloadWorkflowRunLogs({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/workflow-runs/#download-workflow-run-logs).
