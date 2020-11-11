---
name: Get project permission for a user
example: octokit.projects.getPermissionForUser({ project_id, username })
route: GET /projects/{project_id}/collaborators/{username}/permission
scope: projects
type: API method
---

# Get project permission for a user

Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.

```js
octokit.projects.getPermissionForUser({
  project_id,
  username
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
    <tr><td>project_id</td><td>yes</td><td>

</td></tr>
<tr><td>username</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/projects#get-project-permission-for-a-user).
