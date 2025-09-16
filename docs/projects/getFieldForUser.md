---
name: Get project field for user
example: octokit.rest.projects.getFieldForUser({ project_number, field_id, user_id })
route: GET /users/{user_id}/projectsV2/{project_number}/fields/{field_id}
scope: projects
type: API method
---

# Get project field for user

Get a specific field for a user-owned project.

```js
octokit.rest.projects.getFieldForUser({
  project_number,
  field_id,
  user_id,
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
<tr><td>field_id</td><td>yes</td><td>

The unique identifier of the field.

</td></tr>
<tr><td>user_id</td><td>yes</td><td>

The unique identifier of the user.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/fields#get-project-field-for-user).
