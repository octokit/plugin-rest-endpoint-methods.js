---
name: Update project item for organization
example: octokit.rest.projects.updateItemForOrg({ project_number, org, item_id, fields, fields[].id, fields[].value })
route: PATCH /orgs/{org}/projectsV2/{project_number}/items/{item_id}
scope: projects
type: API method
---

# Update project item for organization

Update a specific item in an organization-owned project.

```js
octokit.rest.projects.updateItemForOrg({
        project_number,
org,
item_id,
fields,
fields[].id,
fields[].value
      })
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
<tr><td>fields</td><td>yes</td><td>

A list of field updates to apply.

</td></tr>
<tr><td>fields[].id</td><td>yes</td><td>

The ID of the project field to update.

</td></tr>
<tr><td>fields[].value</td><td>yes</td><td>

The new value for the field:

- For text, number, and date fields, provide the new value directly.
- For single select and iteration fields, provide the ID of the option or iteration.
- To clear the field, set this to null.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/items#update-project-item-for-organization).
