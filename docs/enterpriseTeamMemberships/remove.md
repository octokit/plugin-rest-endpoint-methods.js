---
name: Remove team membership
example: octokit.rest.enterpriseTeamMemberships.remove({ enterprise, enterprise-team, username })
route: DELETE /enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}
scope: enterpriseTeamMemberships
type: API method
---

# Remove team membership

Remove membership of a specific user from a particular team in an enterprise.

```js
octokit.rest.enterpriseTeamMemberships.remove({
        enterprise,
enterprise-team,
username
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
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/enterprise-teams/enterprise-team-members#remove-team-membership).
