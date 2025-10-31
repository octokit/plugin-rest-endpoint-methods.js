---
name: Get organization assignment
example: octokit.rest.enterpriseTeamOrganizations.getAssignment({ enterprise, enterprise-team, org })
route: GET /enterprises/{enterprise}/teams/{enterprise-team}/organizations/{org}
scope: enterpriseTeamOrganizations
type: API method
---

# Get organization assignment

Check if an enterprise team is assigned to an organization

```js
octokit.rest.enterpriseTeamOrganizations.getAssignment({
        enterprise,
enterprise-team,
org
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
    <tr><td>enterprise</td><td>yes</td><td>

The slug version of the enterprise name.

</td></tr>
<tr><td>enterprise-team</td><td>yes</td><td>

The slug version of the enterprise team name. You can also substitute this value with the enterprise team id.

</td></tr>
<tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/enterprise-teams/enterprise-team-organizations#get-organization-assignment).
