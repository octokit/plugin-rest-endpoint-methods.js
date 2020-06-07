---
name: Create a reply for a review comment
example: octokit.pulls.createReviewCommentReply({ owner, repo, pull_number, comment_id, body })
route: POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies
scope: pulls
type: API method
---

# Create a reply for a review comment

**Deprecated:** This method has been renamed to pulls.createReplyForReviewComment

Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

```js
octokit.pulls.createReviewCommentReply({
  owner,
  repo,
  pull_number,
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>pull_number</td><td>yes</td><td>

</td></tr>
<tr><td>comment_id</td><td>yes</td><td>

</td></tr>
<tr><td>body</td><td>yes</td><td>

The text of the review comment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/pulls/comments/#create-a-reply-for-a-review-comment).
