---

name: List concurrency groups for a workflow run
example: octokit.rest.actions.listConcurrencyGroupsForWorkflowRun({ owner, repo, run_id })
route: GET /repos/{owner}/{repo}/actions/runs/{run_id}/concurrency_groups
scope: actions
type: API method
---

# List concurrency groups for a workflow run

Lists all concurrency groups associated with a workflow run or its jobs.

The set of groups is derived from the run's configuration, so a group is
included even when the run no longer has any items currently holding or
waiting in it. In that case the `group_members` array will be empty.
`total_count` reflects the number of groups the run participates in by
configuration, not the number with active items.

This differs from `GET /repos/{owner}/{repo}/actions/concurrency_groups/{group_name}`,
which returns 404 when a group has no active items. That endpoint reports
the live state of a group repo-wide, while this endpoint reports the
groups associated with a specific run by configuration.

Results are sorted by group name and support cursor-based pagination via
`before` and `after`. The `after` cursor paginates forward only and does
not emit a `rel="prev"` Link; use `before` to page backward from a
forward page's `next` cursor.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```js
octokit.rest.actions.listConcurrencyGroupsForWorkflowRun({
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
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>before</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>after</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/concurrency-groups#list-concurrency-groups-for-a-workflow-run).
