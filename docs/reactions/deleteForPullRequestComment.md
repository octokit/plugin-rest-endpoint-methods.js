---
name: Delete a pull request comment reaction
example: octokit.rest.reactions.deleteForPullRequestComment({ owner, repo, comment_id, reaction_id })
route: DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}
scope: reactions
type: API method
---

# Delete a pull request comment reaction

**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`

Delete a reaction to a [pull request review comment](https://docs.github.com/rest/reference/pulls#review-comments).

```js
octokit.rest.reactions.deleteForPullRequestComment({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/reactions#delete-a-pull-request-comment-reaction).
