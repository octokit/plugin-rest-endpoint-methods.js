---
name: Remove project collaborator
example: octokit.projects.removeCollaborator({ project_id, username })
route: DELETE /projects/{project_id}/collaborators/{username}
scope: projects
type: API method
---

# Remove project collaborator

Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.

```js
octokit.projects.removeCollaborator({
  project_id,
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
    <tr><td>project_id</td><td>yes</td><td>

</td></tr>
<tr><td>username</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/projects/collaborators/#remove-project-collaborator).
