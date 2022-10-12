---
name: Move a project column
example: octokit.rest.projects.moveColumn({ column_id, position })
route: POST /projects/columns/{column_id}/moves
scope: projects
type: API method
---

# Move a project column

```js
octokit.rest.projects.moveColumn({
  column_id,
  position,
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
<tr><td>position</td><td>yes</td><td>

The position of the column in a project. Can be one of: `first`, `last`, or `after:<column_id>` to place after the specified column.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/projects#move-a-project-column).
