---
name: Create a project column
example: octokit.projects.createColumn({ project_id, name })
route: POST /projects/{project_id}/columns
scope: projects
type: API method
---

# Create a project column

```js
octokit.projects.createColumn({
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

</td></tr>
<tr><td>name</td><td>yes</td><td>

The name of the column.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/projects/columns/#create-a-project-column).
