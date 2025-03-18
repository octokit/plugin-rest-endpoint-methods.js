---
name: Delete issue type for an organization
example: octokit.rest.orgs.deleteIssueType({ org, issue_type_id })
route: DELETE /orgs/{org}/issue-types/{issue_type_id}
scope: orgs
type: API method
---

# Delete issue type for an organization

Deletes an issue type for an organization.

You can find out more about issue types in [Managing issue types in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/configuring-issues/managing-issue-types-in-an-organization).

```js
octokit.rest.orgs.deleteIssueType({
  org,
  issue_type_id,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/issue-types#delete-issue-type-for-an-organization).
