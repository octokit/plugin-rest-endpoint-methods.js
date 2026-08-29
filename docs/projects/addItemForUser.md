---

name: Add item to user owned project
example: octokit.rest.projects.addItemForUser({ username, project_number })
route: POST /users/{username}/projectsV2/{project_number}/items
scope: projects
type: API method
---

# Add item to user owned project

Add an issue or pull request item to the specified user owned project.

```js
octokit.rest.projects.addItemForUser({
  username,
  project_number,
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
    <tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
<tr><td>project_number</td><td>yes</td><td>

The project's number.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/items#add-item-to-user-owned-project).
