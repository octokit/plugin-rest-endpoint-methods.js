---
name: List check suites for a Git reference
example: octokit.rest.checks.listSuitesForRef({ owner, repo, ref })
route: GET /repos/{owner}/{repo}/commits/{ref}/check-suites
scope: checks
type: API method
---

# List check suites for a Git reference

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.

```js
octokit.rest.checks.listSuitesForRef({
  owner,
  repo,
  ref,
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
<tr><td>ref</td><td>yes</td><td>

ref parameter

</td></tr>
<tr><td>app_id</td><td>no</td><td>

Filters check suites by GitHub App `id`.

</td></tr>
<tr><td>check_name</td><td>no</td><td>

Returns check runs with the specified `name`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/checks#list-check-suites-for-a-git-reference).
