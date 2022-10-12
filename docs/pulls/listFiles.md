---
name: List pull requests files
example: octokit.rest.pulls.listFiles({ owner, repo, pull_number })
route: GET /repos/{owner}/{repo}/pulls/{pull_number}/files
scope: pulls
type: API method
---

# List pull requests files

**Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.

```js
octokit.rest.pulls.listFiles({
  owner,
  repo,
  pull_number,
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
<tr><td>pull_number</td><td>yes</td><td>

The number that identifies the pull request.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#list-pull-requests-files).
