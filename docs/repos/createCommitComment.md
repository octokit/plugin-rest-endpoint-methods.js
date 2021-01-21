---
name: Create a commit comment
example: octokit.repos.createCommitComment({ owner, repo, commit_sha, body })
route: POST /repos/{owner}/{repo}/commits/{commit_sha}/comments
scope: repos
type: API method
---

# Create a commit comment

Create a comment for a commit using its `:commit_sha`.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.

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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#create-a-commit-comment).
