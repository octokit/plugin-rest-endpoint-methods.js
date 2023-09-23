---
name: Review pending deployments for a workflow run
example: octokit.rest.actions.reviewPendingDeploymentsForRun({ owner, repo, run_id, environment_ids, state, comment })
route: POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments
scope: actions
type: API method
---

# Review pending deployments for a workflow run

Approve or reject pending deployments that are waiting on approval by a required reviewer.

Required reviewers with read access to the repository contents and deployments can use this endpoint. Required reviewers must authenticate using an access token with the `repo` scope to use this endpoint.

```js
octokit.rest.actions.reviewPendingDeploymentsForRun({
  owner,
  repo,
  run_id,
  environment_ids,
  state,
  comment,
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
<tr><td>environment_ids</td><td>yes</td><td>

The list of environment ids to approve or reject

</td></tr>
<tr><td>state</td><td>yes</td><td>

Whether to approve or reject deployment to the specified environments.

</td></tr>
<tr><td>comment</td><td>yes</td><td>

A comment to accompany the deployment review

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/workflow-runs#review-pending-deployments-for-a-workflow-run).
