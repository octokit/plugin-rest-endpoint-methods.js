---
name: Update a commit comment
example: octokit.repos.updateCommitComment({ owner, repo, comment_id, body })
route: PATCH /repos/{owner}/{repo}/comments/{comment_id}
scope: repos
type: API method
---

# Update a commit comment

```js
octokit.repos.updateCommitComment({
  owner,
  repo,
  comment_id,
  body,
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
<tr><td>body</td><td>yes</td><td>

The contents of the comment

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/comments/#update-a-commit-comment).
