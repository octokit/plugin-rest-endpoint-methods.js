---
name: Update a project column
example: octokit.projects.updateColumn({ column_id, name })
route: PATCH /projects/columns/{column_id}
scope: projects
type: API method
---

# Update a project column

```js
octokit.projects.updateColumn({
  column_id,
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
    <tr><td>column_id</td><td>yes</td><td>

column_id parameter

</td></tr>
<tr><td>name</td><td>yes</td><td>

The new name of the column.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/projects/columns/#update-a-project-column).
