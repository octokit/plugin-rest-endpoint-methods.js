---
name: List project columns
example: octokit.rest.projects.listColumns({ project_id })
route: GET /projects/{project_id}/columns
scope: projects
type: API method
---

# List project columns

Lists the project columns in a project.

```js
octokit.rest.projects.listColumns({
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

The unique identifier of the project.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/columns#list-project-columns).
