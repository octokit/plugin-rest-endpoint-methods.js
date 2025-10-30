---
name: Update an enterprise team
example: octokit.rest.enterpriseTeams.update({ enterprise, team_slug })
route: PATCH /enterprises/{enterprise}/teams/{team_slug}
scope: enterpriseTeams
type: API method
---

# Update an enterprise team

To edit a team, the authenticated user must be an enterprise owner.

```js
octokit.rest.enterpriseTeams.update({
  enterprise,
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
    <tr><td>enterprise</td><td>yes</td><td>

The slug version of the enterprise name.

</td></tr>
<tr><td>team_slug</td><td>yes</td><td>

The slug of the team name.

</td></tr>
<tr><td>name</td><td>no</td><td>

A new name for the team.

</td></tr>
<tr><td>description</td><td>no</td><td>

A new description for the team.

</td></tr>
<tr><td>sync_to_organizations</td><td>no</td><td>

Retired: this field is no longer supported.
Whether the enterprise team should be reflected in each organization.
This value cannot be changed.

</td></tr>
<tr><td>organization_selection_type</td><td>no</td><td>

Specifies which organizations in the enterprise should have access to this team. Can be one of `disabled`, `selected`, or `all`.
`disabled`: The team is not assigned to any organizations. This is the default when you create a new team.
`selected`: The team is assigned to specific organizations. You can then use the [add organization assignments API](https://docs.github.com/rest/enterprise-teams/enterprise-team-organizations#add-organization-assignments).
`all`: The team is assigned to all current and future organizations in the enterprise.

</td></tr>
<tr><td>group_id</td><td>no</td><td>

The ID of the IdP group to assign team membership with. The new IdP group will replace the existing one, or replace existing direct members if the team isn't currently linked to an IdP group.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/enterprise-teams/enterprise-teams#update-an-enterprise-team).
