---
name: Update an existing project column
example: octokit.rest.projects.updateColumn({ column_id, name })
route: PATCH /projects/columns/{column_id}
scope: projects
type: API method
---

# Update an existing project column

```js
octokit.rest.projects.updateColumn({
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

The unique identifier of the column.

</td></tr>
<tr><td>name</td><td>yes</td><td>

Name of the project column

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/projects#update-a-project-column).
