---
name: Get an issue comment
example: octokit.rest.issues.getComment({ owner, repo, comment_id })
route: GET /repos/{owner}/{repo}/issues/comments/{comment_id}
scope: issues
type: API method
---

# Get an issue comment

```js
octokit.rest.issues.getComment({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>comment_id</td><td>yes</td><td>

The unique identifier of the comment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/issues#get-an-issue-comment).
