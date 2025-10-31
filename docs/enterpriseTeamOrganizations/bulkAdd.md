---
name: Add organization assignments
example: octokit.rest.enterpriseTeamOrganizations.bulkAdd({ enterprise, enterprise-team, organization_slugs })
route: POST /enterprises/{enterprise}/teams/{enterprise-team}/organizations/add
scope: enterpriseTeamOrganizations
type: API method
---

# Add organization assignments

Assign an enterprise team to multiple organizations.

```js
octokit.rest.enterpriseTeamOrganizations.bulkAdd({
        enterprise,
enterprise-team,
organization_slugs
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
<tr><td>organization_slugs</td><td>yes</td><td>

Organization slug to assign the team to.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/enterprise-teams/enterprise-team-organizations#add-organization-assignments).
