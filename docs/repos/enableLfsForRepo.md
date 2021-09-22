---
name: Enable Git LFS for a repository
example: octokit.rest.repos.enableLfsForRepo({ owner, repo })
route: PUT /repos/{owner}/{repo}/lfs
scope: repos
type: API method
---

# Enable Git LFS for a repository

**Note:** The Git LFS API endpoints are currently in beta and are subject to change.

```js
octokit.rest.repos.enableLfsForRepo({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#enable-git-lfs-for-a-repository).
