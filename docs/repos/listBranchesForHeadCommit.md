---
name: List branches for HEAD commit
example: octokit.repos.listBranchesForHeadCommit({ owner, repo, commit_sha })
route: GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head
scope: repos
type: API method
---

# List branches for HEAD commit

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.

```js
octokit.repos.listBranchesForHeadCommit({
  owner,
  repo,
  commit_sha
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
<tr><td>commit_sha</td><td>yes</td><td>

commit_sha+ parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#list-branches-for-head-commit).
