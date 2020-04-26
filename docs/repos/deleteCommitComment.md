---
name: Delete a commit comment
example: octokit.repos.deleteCommitComment({ owner, repo, comment_id })
route: DELETE /repos/{owner}/{repo}/comments/{comment_id}
scope: repos
type: API method
---

# Delete a commit comment

```js
octokit.repos.deleteCommitComment({
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>comment_id</td><td>yes</td><td>

comment_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/comments/#delete-a-commit-comment).
