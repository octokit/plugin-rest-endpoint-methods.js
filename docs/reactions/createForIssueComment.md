---
name: Create reaction for an issue comment
example: octokit.rest.reactions.createForIssueComment({ owner, repo, comment_id, content })
route: POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions
scope: reactions
type: API method
---

# Create reaction for an issue comment

Create a reaction to an [issue comment](https://docs.github.com/rest/issues/comments#get-an-issue-comment). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.

```js
octokit.rest.reactions.createForIssueComment({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>comment_id</td><td>yes</td><td>

The unique identifier of the comment.

</td></tr>
<tr><td>content</td><td>yes</td><td>

The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the issue comment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reactions/reactions#create-reaction-for-an-issue-comment).
