---
name: Create a user project
example: octokit.projects.createForAuthenticatedUser({ name })
route: POST /user/projects
scope: projects
type: API method
---

# Create a user project

```js
octokit.projects.createForAuthenticatedUser({
  name,
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
    <tr><td>name</td><td>yes</td><td>

The name of the project.

</td></tr>
<tr><td>body</td><td>no</td><td>

The description of the project.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/projects/#create-a-user-project).
