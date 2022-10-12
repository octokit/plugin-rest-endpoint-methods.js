---
name: Get a workflow run attempt
example: octokit.rest.actions.getWorkflowRunAttempt({ owner, repo, run_id, attempt_number })
route: GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}
scope: actions
type: API method
---

# Get a workflow run attempt

Gets a specific workflow run attempt. Anyone with read access to the repository
can use this endpoint. If the repository is private you must use an access token
with the `repo` scope. GitHub Apps must have the `actions:read` permission to
use this endpoint.

```js
octokit.rest.actions.getWorkflowRunAttempt({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>run_id</td><td>yes</td><td>

The unique identifier of the workflow run.

</td></tr>
<tr><td>attempt_number</td><td>yes</td><td>

The attempt number of the workflow run.

</td></tr>
<tr><td>exclude_pull_requests</td><td>no</td><td>

If `true` pull requests are omitted from the response (empty array).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#get-a-workflow-run-attempt).
