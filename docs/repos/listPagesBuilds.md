---
name: List GitHub Pages builds
example: octokit.rest.repos.listPagesBuilds({ owner, repo })
route: GET /repos/{owner}/{repo}/pages/builds
scope: repos
type: API method
---

# List GitHub Pages builds

Lists builts of a GitHub Pages site.

A token with the `repo` scope is required. GitHub Apps must have the `pages:read` permission.

```js
octokit.rest.repos.listPagesBuilds({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/pages#list-github-pages-builds).
