---
name: Update a project
example: octokit.rest.projects.update({ project_id })
route: PATCH /projects/{project_id}
scope: projects
type: API method
---

# Update a project

Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

```js
octokit.rest.projects.update({
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
<tr><td>name</td><td>no</td><td>

Name of the project

</td></tr>
<tr><td>body</td><td>no</td><td>

Body of the project

</td></tr>
<tr><td>state</td><td>no</td><td>

State of the project; either 'open' or 'closed'

</td></tr>
<tr><td>organization_permission</td><td>no</td><td>

The baseline permission that all organization members have on this project

</td></tr>
<tr><td>private</td><td>no</td><td>

Whether or not this project can be seen by everyone.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/projects#update-a-project).
