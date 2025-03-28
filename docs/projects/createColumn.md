---
name: Create a project column
example: octokit.rest.projects.createColumn({ project_id, name })
route: POST /projects/{project_id}/columns
scope: projects
type: API method
---

# Create a project column

**This method is deprecated.**

> [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience.
> See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.

```js
octokit.rest.projects.createColumn({
  project_id,
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
    <tr><td>project_id</td><td>yes</td><td>

The unique identifier of the project.

</td></tr>
<tr><td>name</td><td>yes</td><td>

Name of the project column

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/columns#create-a-project-column).
