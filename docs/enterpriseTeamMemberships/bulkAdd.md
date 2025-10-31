---
name: Bulk add team members
example: octokit.rest.enterpriseTeamMemberships.bulkAdd({ enterprise, enterprise-team, usernames })
route: POST /enterprises/{enterprise}/teams/{enterprise-team}/memberships/add
scope: enterpriseTeamMemberships
type: API method
---

# Bulk add team members

Add multiple team members to an enterprise team.

```js
octokit.rest.enterpriseTeamMemberships.bulkAdd({
        enterprise,
enterprise-team,
usernames
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
<tr><td>usernames</td><td>yes</td><td>

The GitHub user handles to add to the team.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/enterprise-teams/enterprise-team-members#bulk-add-team-members).
