---
name: Update an issue comment
example: octokit.rest.issues.updateComment({ owner, repo, comment_id, body })
route: PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}
scope: issues
type: API method
---

# Update an issue comment

You can use the REST API to update comments on issues and pull requests. Every pull request is an issue, but not every issue is a pull request.

This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."

- **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.
- **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.
- **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.
- **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```js
octokit.rest.issues.updateComment({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>comment_id</td><td>yes</td><td>

The unique identifier of the comment.

</td></tr>
<tr><td>body</td><td>yes</td><td>

The contents of the comment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/comments#update-an-issue-comment).
