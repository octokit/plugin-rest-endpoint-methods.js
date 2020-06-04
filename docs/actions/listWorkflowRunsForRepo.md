---
name: List workflow runs for a repository
example: octokit.actions.listWorkflowRunsForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/actions/runs
scope: actions
type: API method
---

# List workflow runs for a repository

Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

```js
octokit.actions.listWorkflowRunsForRepo({
  owner,
  repo,
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
<tr><td>actor</td><td>no</td><td>

Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.

</td></tr>
<tr><td>branch</td><td>no</td><td>

Returns workflow runs associated with a branch. Use the name of the branch of the `push`.

</td></tr>
<tr><td>event</td><td>no</td><td>

Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)" in the GitHub Help documentation.

</td></tr>
<tr><td>status</td><td>no</td><td>

Returns workflow runs associated with the check run `status` or `conclusion` you specify. For example, a conclusion can be `success` or a status can be `completed`. For more information, see the `status` and `conclusion` options available in "[Create a check run](https://developer.github.com/v3/checks/runs/#create-a-check-run)."

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/workflow-runs/#list-workflow-runs-for-a-repository).
