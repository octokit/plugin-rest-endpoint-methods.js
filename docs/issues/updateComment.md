---
name: Update an issue comment
example: octokit.issues.updateComment({ owner, repo, comment_id, body })
route: PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}
scope: issues
type: API method
---

# Update an issue comment

```js
octokit.issues.updateComment({
  owner,
  repo,
  comment_id,
  body
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
<tr><td>body</td><td>yes</td><td>

The contents of the comment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#update-an-issue-comment).
