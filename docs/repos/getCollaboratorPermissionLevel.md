---
name: Review a user's permission level
example: octokit.repos.getCollaboratorPermissionLevel({ owner, repo, username })
route: GET /repos/{owner}/{repo}/collaborators/{username}/permission
scope: repos
type: API method
---

# Review a user's permission level

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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>username</td><td>yes</td><td>

username parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/collaborators/#review-a-users-permission-level).
