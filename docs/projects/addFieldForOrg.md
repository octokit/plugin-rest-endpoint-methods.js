---
name: Add a field to an organization-owned project.
example: octokit.rest.projects.addFieldForOrg({ project_number, org, issue_field_id, name, data_type, single_select_options, iteration_configuration })
route: POST /orgs/{org}/projectsV2/{project_number}/fields
scope: projects
type: API method
---

# Add a field to an organization-owned project.

Add a field to an organization-owned project.

```js
octokit.rest.projects.addFieldForOrg({
  project_number,
  org,
  issue_field_id,
  name,
  data_type,
  single_select_options,
  iteration_configuration,
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
<tr><td>issue_field_id</td><td>yes</td><td>

The ID of the IssueField to create the field for.

</td></tr>
<tr><td>name</td><td>yes</td><td>

The name of the field.

</td></tr>
<tr><td>data_type</td><td>yes</td><td>

The field's data type.

</td></tr>
<tr><td>single_select_options</td><td>yes</td><td>

The options available for single select fields. At least one option must be provided when creating a single select field.

</td></tr>
<tr><td>single_select_options[].name</td><td>no</td><td>

The display name of the option.

</td></tr>
<tr><td>single_select_options[].color</td><td>no</td><td>

The color associated with the option.

</td></tr>
<tr><td>single_select_options[].description</td><td>no</td><td>

The description of the option.

</td></tr>
<tr><td>iteration_configuration</td><td>yes</td><td>

The configuration for iteration fields.

</td></tr>
<tr><td>iteration_configuration.start_date</td><td>no</td><td>

The start date of the first iteration.

</td></tr>
<tr><td>iteration_configuration.duration</td><td>no</td><td>

The default duration for iterations in days. Individual iterations can override this value.

</td></tr>
<tr><td>iteration_configuration.iterations</td><td>no</td><td>

Zero or more iterations for the field.

</td></tr>
<tr><td>iteration_configuration.iterations[].title</td><td>no</td><td>

The title of the iteration.

</td></tr>
<tr><td>iteration_configuration.iterations[].start_date</td><td>no</td><td>

The start date of the iteration.

</td></tr>
<tr><td>iteration_configuration.iterations[].duration</td><td>no</td><td>

The duration of the iteration in days.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/fields#add-a-field-to-an-organization-owned-project).
