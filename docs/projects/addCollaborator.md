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

The permission to grant the collaborator. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)." Can be one of:  
\* `read` - can read, but not write to or administer this project.  
\* `write` - can read and write, but not administer this project.  
\* `admin` - can read, write and administer this project.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/projects/collaborators/#add-project-collaborator).
