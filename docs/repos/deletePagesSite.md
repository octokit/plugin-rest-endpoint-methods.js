---
name: Delete a GitHub Pages site
example: octokit.rest.repos.deletePagesSite({ owner, repo })
route: DELETE /repos/{owner}/{repo}/pages
scope: repos
type: API method
---

# Delete a GitHub Pages site

```js
octokit.rest.repos.deletePagesSite({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/pages#delete-a-github-pages-site).
