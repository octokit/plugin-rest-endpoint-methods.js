---
name: Add item to user owned project
example: octokit.rest.projects.addItemForUser({ user_id, project_number, type, id })
route: POST /users/{user_id}/projectsV2/{project_number}/items
scope: projects
type: API method
---

# Add item to user owned project

Add an issue or pull request item to the specified user owned project.

```js
octokit.rest.projects.addItemForUser({
  user_id,
  project_number,
  type,
  id,
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
    <tr><td>user_id</td><td>yes</td><td>

The unique identifier of the user.

</td></tr>
<tr><td>project_number</td><td>yes</td><td>

The project's number.

</td></tr>
<tr><td>type</td><td>yes</td><td>

The type of item to add to the project. Must be either Issue or PullRequest.

</td></tr>
<tr><td>id</td><td>yes</td><td>

The numeric ID of the issue or pull request to add to the project.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/items#add-item-to-user-owned-project).
