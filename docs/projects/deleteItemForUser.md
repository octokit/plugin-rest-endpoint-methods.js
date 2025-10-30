---
name: Delete project item for user
example: octokit.rest.projects.deleteItemForUser({ project_number, username, item_id })
route: DELETE /users/{username}/projectsV2/{project_number}/items/{item_id}
scope: projects
type: API method
---

# Delete project item for user

Delete a specific item from a user-owned project.

```js
octokit.rest.projects.deleteItemForUser({
  project_number,
  username,
  item_id,
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
    <tr><td>project_number</td><td>yes</td><td>

The project's number.

</td></tr>
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
<tr><td>item_id</td><td>yes</td><td>

The unique identifier of the project item.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/items#delete-project-item-for-user).
