---
name: Get project field for organization
example: octokit.rest.projects.getFieldForOrg({ project_number, field_id, org })
route: GET /orgs/{org}/projectsV2/{project_number}/fields/{field_id}
scope: projects
type: API method
---

# Get project field for organization

Get a specific field for an organization-owned project.

```js
octokit.rest.projects.getFieldForOrg({
  project_number,
  field_id,
  org,
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
<tr><td>field_id</td><td>yes</td><td>

The unique identifier of the field.

</td></tr>
<tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/fields#get-project-field-for-organization).
