---
name: Move a project column
example: octokit.projects.moveColumn({ column_id, position })
route: POST /projects/columns/{column_id}/moves
scope: projects
type: API method
---

# Move a project column

```js
octokit.projects.moveColumn({
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

column_id parameter

</td></tr>
<tr><td>position</td><td>yes</td><td>

Can be one of `first`, `last`, or `after:<column_id>`, where `<column_id>` is the `id` value of a column in the same project.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/projects/columns/#move-a-project-column).
