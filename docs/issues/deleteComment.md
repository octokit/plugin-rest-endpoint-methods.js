---
name: Delete a comment
example: octokit.issues.deleteComment({ owner, repo, comment_id })
route: DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}
scope: issues
type: API method
---

# Delete a comment

```js
octokit.issues.deleteComment({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/issues/comments/#delete-a-comment).
