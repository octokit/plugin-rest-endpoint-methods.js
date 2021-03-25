---
name: Get latest Pages build
example: octokit.rest.repos.getLatestPagesBuild({ owner, repo })
route: GET /repos/{owner}/{repo}/pages/builds/latest
scope: repos
type: API method
---

# Get latest Pages build

```js
octokit.rest.repos.getLatestPagesBuild({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#get-latest-pages-build).
