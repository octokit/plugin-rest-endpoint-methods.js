---
name: List team members
example: octokit.rest.teams.listMembersInOrg({ org, team_slug })
route: GET /orgs/{org}/teams/{team_slug}/members
scope: teams
type: API method
---

# List team members

Team members will include the members of child teams.

To list members in a team, the team must be visible to the authenticated user.

```js
octokit.rest.teams.listMembersInOrg({
  org,
  team_slug,
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
<tr><td>team_slug</td><td>yes</td><td>

The slug of the team name.

</td></tr>
<tr><td>role</td><td>no</td><td>

Filters members returned by their role in the team.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/teams/members#list-team-members).
