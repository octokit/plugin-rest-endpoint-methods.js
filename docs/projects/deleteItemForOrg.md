---
name: Delete project item for organization
example: octokit.rest.projects.deleteItemForOrg({ project_number, org, item_id })
route: DELETE /orgs/{org}/projectsV2/{project_number}/items/{item_id}
scope: projects
type: API method
---

# Delete project item for organization

Delete a specific item from an organization-owned project.

```js
octokit.rest.projects.deleteItemForOrg({
  project_number,
  org,
  item_id,
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
    <tr><td>project_number</td><td>yes</td><td>

The project's number.

</td></tr>
<tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>item_id</td><td>yes</td><td>

The unique identifier of the project item.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/items#delete-project-item-for-organization).
