---
name: List issue types for an organization
example: octokit.rest.orgs.listIssueTypes({ org })
route: GET /orgs/{org}/issue-types
scope: orgs
type: API method
---

# List issue types for an organization

Lists all issue types for an organization. OAuth app tokens and personal access tokens (classic) need the read:org scope to use this endpoint.

```js
octokit.rest.orgs.listIssueTypes({
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/issue-types#list-issue-types-for-an-organization).
