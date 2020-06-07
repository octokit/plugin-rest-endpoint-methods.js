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

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/comments/#get-a-commit-comment).
