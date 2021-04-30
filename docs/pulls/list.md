---
name: List pull requests
example: octokit.rest.pulls.list({ owner, repo })
route: GET /repos/{owner}/{repo}/pulls
scope: pulls
type: API method
---

# List pull requests

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

```js
octokit.rest.pulls.list({
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
<tr><td>state</td><td>no</td><td>

Either `open`, `closed`, or `all` to filter by state.

</td></tr>
<tr><td>head</td><td>no</td><td>

Filter pulls by head user or head organization and branch name in the format of `user:ref-name` or `organization:ref-name`. For example: `github:new-script-format` or `octocat:test-branch`.

</td></tr>
<tr><td>base</td><td>no</td><td>

Filter pulls by base branch name. Example: `gh-pages`.

</td></tr>
<tr><td>sort</td><td>no</td><td>

What to sort results by. Can be either `created`, `updated`, `popularity` (comment count) or `long-running` (age, filtering by pulls updated in the last month).

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction of the sort. Can be either `asc` or `desc`. Default: `desc` when sort is `created` or sort is not specified, otherwise `asc`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/pulls#list-pull-requests).
