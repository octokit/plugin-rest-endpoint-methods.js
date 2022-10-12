---
name: List review comments in a repository
example: octokit.rest.pulls.listReviewCommentsForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/pulls/comments
scope: pulls
type: API method
---

# List review comments in a repository

Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.

```js
octokit.rest.pulls.listReviewCommentsForRepo({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>sort</td><td>no</td><td>

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction to sort results. Ignored without `sort` parameter.

</td></tr>
<tr><td>since</td><td>no</td><td>

Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#list-review-comments-in-a-repository).
