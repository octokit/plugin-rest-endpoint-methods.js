# Create a comment

**Note:** Multi-line comments on pull requests are currently in public beta and subject to change.

Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see "[Comments](https://developer.github.com/v3/issues/comments/#create-a-comment)." We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.

You can still create a review comment using the `position` parameter. When you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required. For more information, see [Multi-line comment summary](https://developer.github.com/v3/pulls/comments/#multi-line-comment-summary-3).

**Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

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
octokit.pulls.createComment({
  owner,
  repo,
  pull_number,
  body,
  commit_id,
  path
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>pull_number</td><td>yes</td><td>

pull_number parameter

</td></tr>
<tr><td>body</td><td>yes</td><td>

The text of the review comment.

</td></tr>
<tr><td>commit_id</td><td>yes</td><td>

The SHA of the commit needing a comment. Not using the latest commit SHA may render your comment outdated if a subsequent commit modifies the line you specify as the `position`.

</td></tr>
<tr><td>path</td><td>yes</td><td>

The relative path to the file that necessitates a comment.

</td></tr>
<tr><td>position</td><td>no</td><td>

**Required without `comfort-fade` preview**. The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note above.

</td></tr>
<tr><td>side</td><td>no</td><td>

**Required with `comfort-fade` preview**. In a split diff view, the side of the diff that the pull request's changes appear on. Can be `LEFT` or `RIGHT`. Use `LEFT` for deletions that appear in red. Use `RIGHT` for additions that appear in green or unchanged lines that appear in white and are shown for context. For a multi-line comment, side represents whether the last line of the comment range is a deletion or addition. For more information, see "[Diff view options](https://help.github.com/en/articles/about-comparing-branches-in-pull-requests#diff-view-options)" in the GitHub Help documentation.

</td></tr>
<tr><td>line</td><td>no</td><td>

**Required with `comfort-fade` preview**. The line of the blob in the pull request diff that the comment applies to. For a multi-line comment, the last line of the range that your comment applies to.

</td></tr>
<tr><td>start_line</td><td>no</td><td>

**Required when using multi-line comments**. To create multi-line comments, you must use the `comfort-fade` preview header. The `start_line` is the first line in the pull request diff that your multi-line comment applies to. To learn more about multi-line comments, see "[Commenting on a pull request](https://help.github.com/en/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)" in the GitHub Help documentation.

</td></tr>
<tr><td>start_side</td><td>no</td><td>

**Required when using multi-line comments**. To create multi-line comments, you must use the `comfort-fade` preview header. The `start_side` is the starting side of the diff that the comment applies to. Can be `LEFT` or `RIGHT`. To learn more about multi-line comments, see "[Commenting on a pull request](https://help.github.com/en/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)" in the GitHub Help documentation. See `side` in this table for additional context.

</td></tr>
<tr><td>number</td><td>no</td><td>

null

</td></tr>
<tr><td>in_reply_to</td><td>no</td><td>

The comment ID to reply to. **Note**: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
