---
name: List pull requests associated with a commit
example: octokit.rest.repos.listPullRequestsAssociatedWithCommit({ owner, repo, commit_sha })
route: GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls
scope: repos
type: API method
---

# List pull requests associated with a commit

Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, will only return open pull requests associated with the commit.

```js
octokit.rest.repos.listPullRequestsAssociatedWithCommit({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>commit_sha</td><td>yes</td><td>

The SHA of the commit.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/commits/commits#list-pull-requests-associated-with-a-commit).
