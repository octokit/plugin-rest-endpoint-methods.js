---
name: List check runs in a check suite
example: octokit.checks.listForSuite({ owner, repo, check_suite_id })
route: GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs
scope: checks
type: API method
---

# List check runs in a check suite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

```js
octokit.checks.listForSuite({
  owner,
  repo,
  check_suite_id,
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
<tr><td>check_suite_id</td><td>yes</td><td>

check_suite_id parameter

</td></tr>
<tr><td>check_name</td><td>no</td><td>

Returns check runs with the specified `name`.

</td></tr>
<tr><td>status</td><td>no</td><td>

Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.

</td></tr>
<tr><td>filter</td><td>no</td><td>

Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/checks/runs/#list-check-runs-in-a-check-suite).
