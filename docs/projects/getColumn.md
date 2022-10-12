---
name: Get a project column
example: octokit.rest.projects.getColumn({ column_id })
route: GET /projects/columns/{column_id}
scope: projects
type: API method
---

# Get a project column

```js
octokit.rest.projects.getColumn({
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

The unique identifier of the column.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/projects#get-a-project-column).
