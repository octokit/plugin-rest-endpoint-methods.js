---
name: Remove all organization roles for a team
example: octokit.rest.orgs.revokeAllOrgRolesTeam({ org, team_slug })
route: DELETE /orgs/{org}/organization-roles/teams/{team_slug}
scope: orgs
type: API method
---

# Remove all organization roles for a team

Removes all assigned organization roles from a team. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."

The authenticated user must be an administrator for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.orgs.revokeAllOrgRolesTeam({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/organization-roles#remove-all-organization-roles-for-a-team).
