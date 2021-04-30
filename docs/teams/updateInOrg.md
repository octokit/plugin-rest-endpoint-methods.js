---
name: Update a team
example: octokit.rest.teams.updateInOrg({ org, team_slug })
route: PATCH /orgs/{org}/teams/{team_slug}
scope: teams
type: API method
---

# Update a team

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.

```js
octokit.rest.teams.updateInOrg({
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

</td></tr>
<tr><td>team_slug</td><td>yes</td><td>

team_slug parameter

</td></tr>
<tr><td>name</td><td>no</td><td>

The name of the team.

</td></tr>
<tr><td>description</td><td>no</td><td>

The description of the team.

</td></tr>
<tr><td>privacy</td><td>no</td><td>

The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. When a team is nested, the `privacy` for parent teams cannot be `secret`. The options are:  
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/teams#update-a-team).
