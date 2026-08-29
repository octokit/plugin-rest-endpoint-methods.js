---

name: List issue fields for an organization
example: octokit.rest.orgs.listIssueFields({ org })
route: GET /orgs/{org}/issue-fields
scope: orgs
type: API method
---

# List issue fields for an organization

Lists all issue fields for an organization. OAuth app tokens and personal access tokens (classic) need the read:org scope to use this endpoint.

```js
octokit.rest.orgs.listIssueFields({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/issue-fields#list-issue-fields-for-an-organization).
