---
name: List issue comments for a repository
example: octokit.rest.issues.listCommentsForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/issues/comments
scope: issues
type: API method
---

# List issue comments for a repository

You can use the REST API to list comments on issues and pull requests for a repository. Every pull request is an issue, but not every issue is a pull request.

By default, issue comments are ordered by ascending ID.

```js
octokit.rest.issues.listCommentsForRepo({
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

The property to sort the results by.

</td></tr>
<tr><td>direction</td><td>no</td><td>

Either `asc` or `desc`. Ignored without the `sort` parameter.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#list-issue-comments-for-a-repository).
