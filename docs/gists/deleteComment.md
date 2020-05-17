---
name: Delete a comment
example: octokit.gists.deleteComment({ gist_id, comment_id })
route: DELETE /gists/{gist_id}/comments/{comment_id}
scope: gists
type: API method
---

# Delete a comment

```js
octokit.gists.deleteComment({
  gist_id,
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
    <tr><td>gist_id</td><td>yes</td><td>

</td></tr>
<tr><td>comment_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/gists/comments/#delete-a-comment).
