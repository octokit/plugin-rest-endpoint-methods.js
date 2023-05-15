---
name: Get GitHub Pages build
example: octokit.rest.repos.getPagesBuild({ owner, repo, build_id })
route: GET /repos/{owner}/{repo}/pages/builds/{build_id}
scope: repos
type: API method
---

# Get GitHub Pages build

Gets information about a GitHub Pages build.

A token with the `repo` scope is required. GitHub Apps must have the `pages:read` permission.

```js
octokit.rest.repos.getPagesBuild({
  owner,
  repo,
  build_id,
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
<tr><td>build_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/pages#get-github-pages-build).
