---
name: Bulk remove team members
example: octokit.rest.enterpriseTeamMemberships.bulkRemove({ enterprise, enterprise-team, usernames })
route: POST /enterprises/{enterprise}/teams/{enterprise-team}/memberships/remove
scope: enterpriseTeamMemberships
type: API method
---

# Bulk remove team members

Remove multiple team members from an enterprise team.

```js
octokit.rest.enterpriseTeamMemberships.bulkRemove({
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

The GitHub user handles to be removed from the team.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/enterprise-teams/enterprise-team-members#bulk-remove-team-members).
