---
name: Get a single comment
example: octokit.issues.getComment({ owner, repo, comment_id })
route: GET /repos/{owner}/{repo}/issues/comments/{comment_id}
scope: issues
type: API method
---

# Get a single comment

```js
octokit.issues.getComment({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/issues/comments/#get-a-single-comment).
