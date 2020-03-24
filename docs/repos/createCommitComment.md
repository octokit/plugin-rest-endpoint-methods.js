# Create a commit comment

Create a comment for a commit using its `:commit_sha`.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

```js
octokit.repos.createCommitComment({
  owner,
  repo,
  commit_sha,
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>commit_sha</td><td>yes</td><td>

commit_sha parameter

</td></tr>
<tr><td>body</td><td>yes</td><td>

The contents of the comment.

</td></tr>
<tr><td>path</td><td>no</td><td>

Relative path of the file to comment on.

</td></tr>
<tr><td>position</td><td>no</td><td>

Line index in the diff to comment on.

</td></tr>
<tr><td>line</td><td>no</td><td>

**Deprecated**. Use **position** parameter instead. Line number in the file to comment on.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
