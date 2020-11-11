---
name: Delete a project column
example: octokit.projects.deleteColumn({ column_id })
route: DELETE /projects/columns/{column_id}
scope: projects
type: API method
---

# Delete a project column

```js
octokit.projects.deleteColumn({
  column_id,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/projects#delete-a-project-column).
