---
name: Update a review comment for a pull request
example: octokit.rest.pulls.updateReviewComment({ owner, repo, comment_id, body })
route: PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}
scope: pulls
type: API method
---

# Update a review comment for a pull request

Enables you to edit a review comment.

```js
octokit.rest.pulls.updateReviewComment({
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>comment_id</td><td>yes</td><td>

The unique identifier of the comment.

</td></tr>
<tr><td>body</td><td>yes</td><td>

The text of the reply to the review comment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/pulls#update-a-review-comment-for-a-pull-request).
