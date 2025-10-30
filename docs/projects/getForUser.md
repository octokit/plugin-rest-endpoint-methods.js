---
name: Get project for user
example: octokit.rest.projects.getForUser({ project_number, username })
route: GET /users/{username}/projectsV2/{project_number}
scope: projects
type: API method
---

# Get project for user

Get a specific user-owned project.

```js
octokit.rest.projects.getForUser({
  project_number,
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
    <tr><td>project_number</td><td>yes</td><td>

The project's number.

</td></tr>
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/projects#get-project-for-user).
