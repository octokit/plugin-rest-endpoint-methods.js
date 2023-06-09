---
name: Delete a commit comment
example: octokit.rest.repos.deleteCommitComment({ owner, repo, comment_id })
route: DELETE /repos/{owner}/{repo}/comments/{comment_id}
scope: repos
type: API method
---

# Delete a commit comment

```js
octokit.rest.repos.deleteCommitComment({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>comment_id</td><td>yes</td><td>

The unique identifier of the comment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/commits/comments#delete-a-commit-comment).
