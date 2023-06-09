---
name: Get a review comment for a pull request
example: octokit.rest.pulls.getReviewComment({ owner, repo, comment_id })
route: GET /repos/{owner}/{repo}/pulls/comments/{comment_id}
scope: pulls
type: API method
---

# Get a review comment for a pull request

Provides details for a review comment.

```js
octokit.rest.pulls.getReviewComment({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/pulls#get-a-review-comment-for-a-pull-request).
