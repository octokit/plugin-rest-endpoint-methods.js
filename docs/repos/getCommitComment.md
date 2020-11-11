---
name: Get a commit comment
example: octokit.repos.getCommitComment({ owner, repo, comment_id })
route: GET /repos/{owner}/{repo}/comments/{comment_id}
scope: repos
type: API method
---

# Get a commit comment

```js
octokit.repos.getCommitComment({
  owner,
  repo,
  comment_id,
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
<tr><td>comment_id</td><td>yes</td><td>

comment_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#get-a-commit-comment).
