---
name: List workflow runs
example: octokit.rest.actions.listWorkflowRuns({ owner, repo, workflow_id })
route: GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs
scope: actions
type: API method
---

# List workflow runs

List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.

```js
octokit.rest.actions.listWorkflowRuns({
  owner,
  repo,
  workflow_id,
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
<tr><td>workflow_id</td><td>yes</td><td>

The ID of the workflow. You can also pass the workflow file name as a string.

</td></tr>
<tr><td>actor</td><td>no</td><td>

Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.

</td></tr>
<tr><td>branch</td><td>no</td><td>

Returns workflow runs associated with a branch. Use the name of the branch of the `push`.

</td></tr>
<tr><td>event</td><td>no</td><td>

Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)."

</td></tr>
<tr><td>status</td><td>no</td><td>

Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub can set a status of `waiting` or `requested`. For a list of the possible `status` and `conclusion` options, see "[Create a check run](https://docs.github.com/rest/reference/checks#create-a-check-run)."

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>created</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#list-workflow-runs).
