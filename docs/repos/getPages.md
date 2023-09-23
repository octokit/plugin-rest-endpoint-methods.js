---
name: Get a GitHub Pages site
example: octokit.rest.repos.getPages({ owner, repo })
route: GET /repos/{owner}/{repo}/pages
scope: repos
type: API method
---

# Get a GitHub Pages site

Gets information about a GitHub Pages site.

A token with the `repo` scope is required. GitHub Apps must have the `pages:read` permission.

```js
octokit.rest.repos.getPages({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/pages/pages#get-a-apiname-pages-site).
