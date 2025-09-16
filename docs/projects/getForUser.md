---
name: Get project for user
example: octokit.rest.projects.getForUser({ project_number, user_id })
route: GET /users/{user_id}/projectsV2/{project_number}
scope: projects
type: API method
---

# Get project for user

Get a specific user-owned project.

```js
octokit.rest.projects.getForUser({
  project_number,
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
<tr><td>user_id</td><td>yes</td><td>

The unique identifier of the user.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/projects#get-project-for-user).
