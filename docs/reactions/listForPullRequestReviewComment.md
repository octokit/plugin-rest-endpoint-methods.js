---
name: List reactions for a pull request review comment
example: octokit.rest.reactions.listForPullRequestReviewComment({ owner, repo, comment_id })
route: GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions
scope: reactions
type: API method
---

# List reactions for a pull request review comment

List the reactions to a [pull request review comment](https://docs.github.com/rest/reference/pulls#review-comments).

```js
octokit.rest.reactions.listForPullRequestReviewComment({
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

comment_id parameter

</td></tr>
<tr><td>content</td><td>no</td><td>

Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a pull request review comment.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment).
