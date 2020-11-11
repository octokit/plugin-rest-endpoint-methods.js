---
name: Remove a repository collaborator
example: octokit.repos.removeCollaborator({ owner, repo, username })
route: DELETE /repos/{owner}/{repo}/collaborators/{username}
scope: repos
type: API method
---

# Remove a repository collaborator

```js
octokit.repos.removeCollaborator({
  owner,
  repo,
  username,
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
<tr><td>username</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#remove-a-repository-collaborator).
