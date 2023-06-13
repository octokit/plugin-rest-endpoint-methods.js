---
name: Disable Git LFS for a repository
example: octokit.rest.repos.disableLfsForRepo({ owner, repo })
route: DELETE /repos/{owner}/{repo}/lfs
scope: repos
type: API method
---

# Disable Git LFS for a repository

Disables Git LFS for a repository. Access tokens must have the `admin:enterprise` scope.

```js
octokit.rest.repos.disableLfsForRepo({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#disable-git-lfs-for-a-repository).
