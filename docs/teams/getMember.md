# Get team member (Legacy)

**This method is deprecated.**

**Deprecated:** This method has been renamed to teams.getMemberLegacy

The "Get team member" endpoint (described below) is deprecated.

We recommend using the [Get team membership](https://developer.github.com/v3/teams/members/#get-team-membership) endpoint instead. It allows you to get both active and pending memberships.

To list members in a team, the team must be visible to the authenticated user.

```js
octokit.teams.getMember(team_id, username);
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
    <tr><td>team_id</td><td>yes</td><td>

team_id parameter

</td></tr>
<tr><td>username</td><td>yes</td><td>

username parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
