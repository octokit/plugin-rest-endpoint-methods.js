# Create reaction for a pull request review comment

Create a reaction to a [pull request review comment](https://developer.github.com/v3/pulls/comments/). A response with a `Status: 200 OK` means that you already added the reaction type to this pull request review comment.

```js
octokit.reactions.createForPullRequestReviewComment({
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>comment_id</td><td>yes</td><td>

comment_id parameter

</td></tr>
<tr><td>content</td><td>yes</td><td>

The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the pull request review comment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
