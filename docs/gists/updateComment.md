---
name: Edit a comment
example: octokit.gists.updateComment({ gist_id, comment_id, body })
route: PATCH /gists/{gist_id}/comments/{comment_id}
scope: gists
type: API method
---

# Edit a comment

```js
octokit.gists.updateComment({
  gist_id,
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
    <tr><td>gist_id</td><td>yes</td><td>

</td></tr>
<tr><td>comment_id</td><td>yes</td><td>

</td></tr>
<tr><td>body</td><td>yes</td><td>

The comment text.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/gists/comments/#edit-a-comment).
