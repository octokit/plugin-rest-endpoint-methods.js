---
name: Delete a project column
example: octokit.rest.projects.deleteColumn({ column_id })
route: DELETE /projects/columns/{column_id}
scope: projects
type: API method
---

# Delete a project column

**This method is deprecated.**

> [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience.
> See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.

```js
octokit.rest.projects.deleteColumn({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/columns#delete-a-project-column).
