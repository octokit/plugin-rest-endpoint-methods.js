---
name: Update a gist comment
example: octokit.rest.gists.updateComment({ gist_id, comment_id, body })
route: PATCH /gists/{gist_id}/comments/{comment_id}
scope: gists
type: API method
---

# Update a gist comment

Updates a comment on a gist.

This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."

- **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.
- **`application/vnd.github.base64+json`**: Returns the base64-encoded contents. This can be useful if your gist contains any invalid UTF-8 sequences.

```js
octokit.rest.gists.updateComment({
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

The unique identifier of the gist.

</td></tr>
<tr><td>comment_id</td><td>yes</td><td>

The unique identifier of the comment.

</td></tr>
<tr><td>body</td><td>yes</td><td>

The comment text.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/gists/comments#update-a-gist-comment).
