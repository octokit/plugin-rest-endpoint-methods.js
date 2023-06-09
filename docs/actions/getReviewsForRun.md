---
name: Get the review history for a workflow run
example: octokit.rest.actions.getReviewsForRun({ owner, repo, run_id })
route: GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals
scope: actions
type: API method
---

# Get the review history for a workflow run

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

```js
octokit.rest.actions.getReviewsForRun({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#get-the-review-history-for-a-workflow-run).
