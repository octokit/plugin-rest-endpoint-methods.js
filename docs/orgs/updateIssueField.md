---

name: Update issue field for an organization
example: octokit.rest.orgs.updateIssueField({ org, issue_field_id, options[].name, options[].color, options[].priority })
route: PATCH /orgs/{org}/issue-fields/{issue_field_id}
scope: orgs
type: API method
---

# Update issue field for an organization

Updates an issue field for an organization.

You can find out more about issue fields in [Managing issue fields in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-an-organization).

To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and
personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.orgs.updateIssueField({
        org,
issue_field_id,
options[].name,
options[].color,
options[].priority
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>issue_field_id</td><td>yes</td><td>

The unique identifier of the issue field.

</td></tr>
<tr><td>name</td><td>no</td><td>

Name of the issue field.

</td></tr>
<tr><td>description</td><td>no</td><td>

Description of the issue field.

</td></tr>
<tr><td>visibility</td><td>no</td><td>

The visibility of the issue field. Can be `organization_members_only` (visible only within the organization) or `all` (visible to all users who can see issues). Only used when the visibility settings feature is enabled.

</td></tr>
<tr><td>options</td><td>no</td><td>

Options for select fields. Only applicable when updating single_select or multi_select fields. When provided, this array **replaces** the entire existing set of options rather than adding to or updating individual options. To retain or update an existing option, include it in the array with its `id`. Options sent without an `id` are treated as new options and may cause existing options to be deleted and recreated.

</td></tr>
<tr><td>options[].id</td><td>no</td><td>

The id of an existing option to retain or update. Omit this when creating a new option.

</td></tr>
<tr><td>options[].name</td><td>yes</td><td>

Name of the option.

</td></tr>
<tr><td>options[].description</td><td>no</td><td>

Description of the option.

</td></tr>
<tr><td>options[].color</td><td>yes</td><td>

Color for the option.

</td></tr>
<tr><td>options[].priority</td><td>yes</td><td>

Priority of the option for ordering.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/issue-fields#update-issue-field-for-an-organization).
