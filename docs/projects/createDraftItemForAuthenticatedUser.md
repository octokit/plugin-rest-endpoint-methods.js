---
name: Create draft item for user owned project
example: octokit.rest.projects.createDraftItemForAuthenticatedUser({ user_id, project_number, title })
route: POST /user/{user_id}/projectsV2/{project_number}/drafts
scope: projects
type: API method
---

# Create draft item for user owned project

Create draft issue item for the specified user owned project.

```js
octokit.rest.projects.createDraftItemForAuthenticatedUser({
  user_id,
  project_number,
  title,
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
<tr><td>title</td><td>yes</td><td>

The title of the draft issue item to create in the project.

</td></tr>
<tr><td>body</td><td>no</td><td>

The body content of the draft issue item to create in the project.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/drafts#create-draft-item-for-user-owned-project).
