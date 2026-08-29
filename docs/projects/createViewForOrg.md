---

name: Create a view for an organization-owned project
example: octokit.rest.projects.createViewForOrg({ org, project_number, name, layout })
route: POST /orgs/{org}/projectsV2/{project_number}/views
scope: projects
type: API method
---

# Create a view for an organization-owned project

Create a new view in an organization-owned project. Views allow you to customize how items in a project are displayed and filtered.

```js
octokit.rest.projects.createViewForOrg({
  org,
  project_number,
  name,
  layout,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>project_number</td><td>yes</td><td>

The project's number.

</td></tr>
<tr><td>name</td><td>yes</td><td>

The name of the view.

</td></tr>
<tr><td>layout</td><td>yes</td><td>

The layout of the view.

</td></tr>
<tr><td>filter</td><td>no</td><td>

The filter query for the view. See [Filtering projects](https://docs.github.com/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) for more information.

</td></tr>
<tr><td>visible_fields</td><td>no</td><td>

`visible_fields` is not applicable to `roadmap` layout views.
For `table` and `board` layouts, this represents the field IDs that should be visible in the view. If not provided, the default visible fields will be used.

</td></tr>
<tr><td>sort_by</td><td>no</td><td>

Sorting configuration for the view. Each element is a two-element array of `[field_id, direction]` where `direction` is `"asc"` or `"desc"`. Supports multiple sort criteria applied in order.

</td></tr>
<tr><td>group_by</td><td>no</td><td>

The field IDs to group items by (horizontal grouping). Supports a single field. The field must support grouping; fields such as `Title`, `Reviewers`, `Linked pull requests`, `Sub-issues progress`, `Tracked by`, and `Tracks` cannot be grouped on.

</td></tr>
<tr><td>vertical_group_by</td><td>no</td><td>

The field IDs to use as columns in `board` layout (vertical grouping). Supports a single field. The field must support grouping; fields such as `Title`, `Reviewers`, `Linked pull requests`, `Sub-issues progress`, `Tracked by`, and `Tracks` cannot be grouped on.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/views#create-a-view-for-an-organization-owned-project).
