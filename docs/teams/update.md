# Edit team (Legacy)

**This method is deprecated.**

**Deprecated:** This method has been renamed to teams.updateLegacy

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Edit team`](https://developer.github.com/v3/teams/#edit-team) endpoint.

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.

```js
octokit.teams.update(team_id, name);
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
<tr><td>name</td><td>yes</td><td>

The name of the team.

</td></tr>
<tr><td>description</td><td>no</td><td>

The description of the team.

</td></tr>
<tr><td>privacy</td><td>no</td><td>

The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. The options are:  
**For a non-nested team:**  
\* `secret` - only visible to organization owners and members of this team.  
\* `closed` - visible to all members of this organization.  
**For a parent or child team:**  
\* `closed` - visible to all members of this organization.

</td></tr>
<tr><td>permission</td><td>no</td><td>

**Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:  
\* `pull` - team members can pull, but not push to or administer newly-added repositories.  
\* `push` - team members can pull and push, but not administer newly-added repositories.  
\* `admin` - team members can pull, push and administer newly-added repositories.

</td></tr>
<tr><td>parent_team_id</td><td>no</td><td>

The ID of a team to set as the parent team.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
