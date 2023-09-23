---
name: Get repository permissions for a user
example: octokit.rest.repos.getCollaboratorPermissionLevel({ owner, repo, username })
route: GET /repos/{owner}/{repo}/collaborators/{username}/permission
scope: repos
type: API method
---

# Get repository permissions for a user

Checks the repository permission of a collaborator. The possible repository
permissions are `admin`, `write`, `read`, and `none`.

_Note_: The `permission` attribute provides the legacy base roles of `admin`, `write`, `read`, and `none`, where the
`maintain` role is mapped to `write` and the `triage` role is mapped to `read`. To determine the role assigned to the
collaborator, see the `role_name` attribute, which will provide the full role name, including custom roles. The
`permissions` hash can also be used to determine which base level of access the collaborator has to the repository.

```js
octokit.rest.repos.getCollaboratorPermissionLevel({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/collaborators/collaborators#get-repository-permissions-for-a-user).
