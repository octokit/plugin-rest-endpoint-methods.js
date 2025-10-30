---
name: Get enterprise team membership
example: octokit.rest.enterpriseTeamMemberships.get({ enterprise, enterprise-team, username })
route: GET /enterprises/{enterprise}/teams/{enterprise-team}/memberships/{username}
scope: enterpriseTeamMemberships
type: API method
---

# Get enterprise team membership

Returns whether the user is a member of the enterprise team.

```js
octokit.rest.enterpriseTeamMemberships.get({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/enterprise-teams/enterprise-team-members#get-enterprise-team-membership).
