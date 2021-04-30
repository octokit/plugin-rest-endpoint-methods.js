---
name: Create reaction for a commit comment
example: octokit.rest.reactions.createForCommitComment({ owner, repo, comment_id, content })
route: POST /repos/{owner}/{repo}/comments/{comment_id}/reactions
scope: reactions
type: API method
---

# Create reaction for a commit comment

Create a reaction to a [commit comment](https://docs.github.com/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.

```js
octokit.rest.reactions.createForCommitComment({
  owner,
  repo,
  comment_id,
  content,
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
<tr><td>content</td><td>yes</td><td>

The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the commit comment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/reactions#create-reaction-for-a-commit-comment).
