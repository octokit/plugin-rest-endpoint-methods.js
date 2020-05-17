---
name: Get a project column
example: octokit.projects.getColumn({ column_id })
route: GET /projects/columns/{column_id}
scope: projects
type: API method
---

# Get a project column

```js
octokit.projects.getColumn({
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

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/projects/columns/#get-a-project-column).
