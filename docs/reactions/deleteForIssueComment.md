---
name: Delete an issue comment reaction
example: octokit.rest.reactions.deleteForIssueComment({ owner, repo, comment_id, reaction_id })
route: DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}
scope: reactions
type: API method
---

# Delete an issue comment reaction

**Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.

Delete a reaction to an [issue comment](https://docs.github.com/rest/reference/issues#comments).

```js
octokit.rest.reactions.deleteForIssueComment({
  owner,
  repo,
  comment_id,
  reaction_id,
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
<tr><td>reaction_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/reactions#delete-an-issue-comment-reaction).
