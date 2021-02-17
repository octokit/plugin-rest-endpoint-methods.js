---
name: List review comments in a repository
example: octokit.pulls.listReviewCommentsForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/pulls/comments
scope: pulls
type: API method
---

# List review comments in a repository

Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.

```js
octokit.pulls.listReviewCommentsForRepo({
  owner,
  repo,
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
<tr><td>sort</td><td>no</td><td>

One of `created` (when the repository was starred) or `updated` (when it was last pushed to).

</td></tr>
<tr><td>direction</td><td>no</td><td>

Can be either `asc` or `desc`. Ignored without `sort` parameter.

</td></tr>
<tr><td>since</td><td>no</td><td>

Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/pulls#list-review-comments-in-a-repository).
