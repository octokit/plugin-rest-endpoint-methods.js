---
name: Add project collaborator
example: octokit.projects.addCollaborator({ project_id, username })
route: PUT /projects/{project_id}/collaborators/{username}
scope: projects
type: API method
---

# Add project collaborator

Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.

```js
octokit.projects.addCollaborator({
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
<tr><td>permission</td><td>no</td><td>

The permission to grant the collaborator.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/projects#add-project-collaborator).
