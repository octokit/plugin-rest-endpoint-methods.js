---
name: Create a gist comment
example: octokit.gists.createComment({ gist_id, body })
route: POST /gists/{gist_id}/comments
scope: gists
type: API method
---

# Create a gist comment

```js
octokit.gists.createComment({
  gist_id,
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
<tr><td>body</td><td>yes</td><td>

The comment text.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/gists/comments/#create-a-gist-comment).
