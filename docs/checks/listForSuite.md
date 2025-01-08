---
name: List check runs in a check suite
example: octokit.rest.checks.listForSuite({ owner, repo, check_suite_id })
route: GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs
scope: checks
type: API method
---

# List check runs in a check suite

Lists check runs for a check suite using its `id`.

> [!NOTE]
> The endpoints to manage checks only look for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.

```js
octokit.rest.checks.listForSuite({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>check_suite_id</td><td>yes</td><td>

The unique identifier of the check suite.

</td></tr>
<tr><td>check_name</td><td>no</td><td>

Returns check runs with the specified `name`.

</td></tr>
<tr><td>status</td><td>no</td><td>

Returns check runs with the specified `status`.

</td></tr>
<tr><td>filter</td><td>no</td><td>

Filters check runs by their `completed_at` timestamp. `latest` returns the most recent check runs.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/checks/runs#list-check-runs-in-a-check-suite).
