# Delete a pull request comment reaction

**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`

Delete a reaction to a [pull request review comment](https://developer.github.com/v3/pulls/comments/).

```js
octokit.reactions.deleteForPullRequestComment({
  owner,
  repo,
  comment_id,
  reaction_id
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
<tr><td>reaction_id</td><td>yes</td><td>

reaction_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
