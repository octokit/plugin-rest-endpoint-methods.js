---

name: Create issue field for an organization
example: octokit.rest.orgs.createIssueField({ org, name, data_type, options[].name, options[].color, options[].priority })
route: POST /orgs/{org}/issue-fields
scope: orgs
type: API method
---

# Create issue field for an organization

Creates a new issue field for an organization.

You can find out more about issue fields in [Managing issue fields in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-an-organization).

To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and
personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.orgs.createIssueField({
        org,
name,
data_type,
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
<tr><td>name</td><td>yes</td><td>

Name of the issue field.

</td></tr>
<tr><td>description</td><td>no</td><td>

Description of the issue field.

</td></tr>
<tr><td>data_type</td><td>yes</td><td>

The data type of the issue field.

</td></tr>
<tr><td>visibility</td><td>no</td><td>

The visibility of the issue field. Can be `organization_members_only` (visible only within the organization) or `all` (visible to all users who can see issues). Only used when the visibility settings feature is enabled. Defaults to `organization_members_only`.

</td></tr>
<tr><td>options</td><td>no</td><td>

Options for select fields. Required when data_type is 'single_select' or 'multi_select'.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/issue-fields#create-issue-field-for-an-organization).
