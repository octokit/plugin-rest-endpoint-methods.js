---
name: Enable Git LFS for a repository
example: octokit.rest.repos.enableLfsForRepo({ owner, repo })
route: PUT /repos/{owner}/{repo}/lfs
scope: repos
type: API method
---

# Enable Git LFS for a repository

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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#enable-git-lfs-for-a-repository).
