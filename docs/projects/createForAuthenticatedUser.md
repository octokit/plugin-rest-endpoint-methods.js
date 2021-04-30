---
name: Create a user project
example: octokit.rest.projects.createForAuthenticatedUser({ name })
route: POST /user/projects
scope: projects
type: API method
---

# Create a user project

```js
octokit.rest.projects.createForAuthenticatedUser({
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

Name of the project

</td></tr>
<tr><td>body</td><td>no</td><td>

Body of the project

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/projects#create-a-user-project).
