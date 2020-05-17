---
name: Disable a Pages site
example: octokit.repos.disablePagesSite({ owner, repo })
route: DELETE /repos/{owner}/{repo}/pages
scope: repos
type: API method
---

# Disable a Pages site

```js
octokit.repos.disablePagesSite({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/pages/#disable-a-pages-site).
