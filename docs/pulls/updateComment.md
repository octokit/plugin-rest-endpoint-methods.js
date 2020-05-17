---
name: Edit a comment
example: octokit.pulls.updateComment({ owner, repo, comment_id, body })
route: PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}
scope: pulls
type: API method
---

# Edit a comment

**Note:** Multi-line comments on pull requests are currently in public beta and subject to change.

Enables you to edit a review comment.

**Multi-line comment summary**

**Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.

Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.

If you use the `comfort-fade` preview header, your response will show:

- For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
- For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.

If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:

- For multi-line comments, the last line of the comment range for the `position` attribute.
- For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.

```js
octokit.pulls.updateComment({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>comment_id</td><td>yes</td><td>

</td></tr>
<tr><td>body</td><td>yes</td><td>

The text of the reply to the review comment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/pulls/comments/#edit-a-comment).
