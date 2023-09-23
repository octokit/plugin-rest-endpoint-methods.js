---
name: Add project collaborator
example: octokit.rest.projects.addCollaborator({ project_id, username })
route: PUT /projects/{project_id}/collaborators/{username}
scope: projects
type: API method
---

# Add project collaborator

Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.

```js
octokit.rest.projects.addCollaborator({
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

The unique identifier of the project.

</td></tr>
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
<tr><td>permission</td><td>no</td><td>

The permission to grant the collaborator.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/collaborators#add-project-collaborator).
