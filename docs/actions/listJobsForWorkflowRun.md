---
name: List jobs for a workflow run
example: octokit.rest.actions.listJobsForWorkflowRun({ owner, repo, run_id })
route: GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs
scope: actions
type: API method
---

# List jobs for a workflow run

Lists jobs for a workflow run. You can use parameters to narrow the list of results. For more information
about using parameters, see [Parameters](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```js
octokit.rest.actions.listJobsForWorkflowRun({
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
<tr><td>filter</td><td>no</td><td>

Filters jobs by their `completed_at` timestamp. `latest` returns jobs from the most recent execution of the workflow run. `all` returns all jobs for a workflow run, including from old executions of the workflow run.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/workflow-jobs#list-jobs-for-a-workflow-run).
