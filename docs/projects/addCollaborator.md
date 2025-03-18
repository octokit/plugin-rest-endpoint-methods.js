---
name: Add project collaborator
example: octokit.rest.projects.addCollaborator({ project_id, username })
route: PUT /projects/{project_id}/collaborators/{username}
scope: projects
type: API method
---

# Add project collaborator

**This method is deprecated.**

> [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience.
> See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.

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
