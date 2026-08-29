---

name: Delete issue field for an organization
example: octokit.rest.orgs.deleteIssueField({ org, issue_field_id })
route: DELETE /orgs/{org}/issue-fields/{issue_field_id}
scope: orgs
type: API method
---

# Delete issue field for an organization

Deletes an issue field for an organization.

You can find out more about issue fields in [Managing issue fields in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-an-organization).

To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and
personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.orgs.deleteIssueField({
  org,
  issue_field_id,
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
<tr><td>issue_field_id</td><td>yes</td><td>

The unique identifier of the issue field.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/issue-fields#delete-issue-field-for-an-organization).
