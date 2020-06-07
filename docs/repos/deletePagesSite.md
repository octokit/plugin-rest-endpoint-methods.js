---
name: Delete a GitHub Pages site
example: octokit.repos.deletePagesSite({ owner, repo })
route: DELETE /repos/{owner}/{repo}/pages
scope: repos
type: API method
---

# Delete a GitHub Pages site

```js
octokit.repos.deletePagesSite({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/pages/#delete-a-github-pages-site).
