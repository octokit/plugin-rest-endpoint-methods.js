---
name: List branches for HEAD commit
example: octokit.rest.repos.listBranchesForHeadCommit({ owner, repo, commit_sha })
route: GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head
scope: repos
type: API method
---

# List branches for HEAD commit

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.

```js
octokit.rest.repos.listBranchesForHeadCommit({
  owner,
  repo,
  commit_sha,
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>commit_sha</td><td>yes</td><td>

The SHA of the commit.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/commits/commits#list-branches-for-head-commit).
