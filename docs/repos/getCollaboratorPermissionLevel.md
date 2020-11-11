---
name: Get repository permissions for a user
example: octokit.repos.getCollaboratorPermissionLevel({ owner, repo, username })
route: GET /repos/{owner}/{repo}/collaborators/{username}/permission
scope: repos
type: API method
---

# Get repository permissions for a user

Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.

```js
octokit.repos.getCollaboratorPermissionLevel({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#get-repository-permissions-for-a-user).
