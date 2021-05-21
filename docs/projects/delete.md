---
name: Delete a project
example: octokit.rest.projects.delete({ project_id })
route: DELETE /projects/{project_id}
scope: projects
type: API method
---

# Delete a project

Deletes a project board. Returns a `404 Not Found` status if projects are disabled.

```js
octokit.rest.projects.delete({
  project_id,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/projects#delete-a-project).
