---
name: Update issue type for an organization
example: octokit.rest.orgs.updateIssueType({ org, issue_type_id, name, is_enabled })
route: PUT /orgs/{org}/issue-types/{issue_type_id}
scope: orgs
type: API method
---

# Update issue type for an organization

Updates an issue type for an organization.

You can find out more about issue types in [Managing issue types in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/configuring-issues/managing-issue-types-in-an-organization).

To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and
personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.orgs.updateIssueType({
  org,
  issue_type_id,
  name,
  is_enabled,
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
<tr><td>issue_type_id</td><td>yes</td><td>

The unique identifier of the issue type.

</td></tr>
<tr><td>name</td><td>yes</td><td>

Name of the issue type.

</td></tr>
<tr><td>is_enabled</td><td>yes</td><td>

Whether or not the issue type is enabled at the organization level.

</td></tr>
<tr><td>description</td><td>no</td><td>

Description of the issue type.

</td></tr>
<tr><td>color</td><td>no</td><td>

Color for the issue type.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/issue-types#update-issue-type-for-an-organization).
