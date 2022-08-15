---
name: Remove a repository collaborator
example: octokit.rest.repos.removeCollaborator({ owner, repo, username })
route: DELETE /repos/{owner}/{repo}/collaborators/{username}
scope: repos
type: API method
---

# Remove a repository collaborator

```js
octokit.rest.repos.removeCollaborator({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/collaborators/collaborators#remove-a-repository-collaborator).
