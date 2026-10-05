---

name: Get a concurrency group for a repository
example: octokit.rest.actions.getConcurrencyGroupForRepository({ owner, repo, concurrency_group_name })
route: GET /repos/{owner}/{repo}/actions/concurrency_groups/{concurrency_group_name}
scope: actions
type: API method
---

# Get a concurrency group for a repository

Gets a specific concurrency group for a repository, including all instances in the group's queue.
Returns 404 if the group is inactive or does not exist.

Optionally, pass `ahead_of_run` or `ahead_of_job` to filter the results to only the items
ahead of the specified workflow run or job in the queue, plus the specified item itself
(returned as the last element). This is useful for determining what is blocking a particular
run or job. Returns 422 if the specified run or job is not in this concurrency group.

When using `ahead_of_run`, this matches workflow-level concurrency and any reusable-workflow
leases held on behalf of that run. Job-level leases within the run are not considered to
block the run as a whole. Use `ahead_of_job` to match job-level concurrency and reusable-workflow
leases on the job's ancestor paths.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```js
octokit.rest.actions.getConcurrencyGroupForRepository({
  owner,
  repo,
  concurrency_group_name,
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
<tr><td>concurrency_group_name</td><td>yes</td><td>

The name of the concurrency group.

</td></tr>
<tr><td>ahead_of_run</td><td>no</td><td>

Filter to items ahead of this workflow run ID in the queue, plus the run itself.
Matches workflow-level concurrency and reusable-workflow leases held on behalf of
the run. Mutually exclusive with `ahead_of_job`.

</td></tr>
<tr><td>ahead_of_job</td><td>no</td><td>

Filter to items ahead of this job ID in the queue, plus the job itself.
Matches job-level concurrency and reusable-workflow leases on the job's
ancestor paths. Mutually exclusive with `ahead_of_run`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/concurrency-groups#get-a-concurrency-group-for-a-repository).
