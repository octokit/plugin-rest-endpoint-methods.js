---
name: Get a gist comment
example: octokit.rest.gists.getComment({ gist_id, comment_id })
route: GET /gists/{gist_id}/comments/{comment_id}
scope: gists
type: API method
---

# Get a gist comment

```js
octokit.rest.gists.getComment({
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

gist_id parameter

</td></tr>
<tr><td>comment_id</td><td>yes</td><td>

comment_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/gists#get-a-gist-comment).
