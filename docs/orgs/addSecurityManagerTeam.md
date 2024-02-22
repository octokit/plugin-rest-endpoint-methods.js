---
name: Add a security manager team
example: octokit.rest.orgs.addSecurityManagerTeam({ org, team_slug })
route: PUT /orgs/{org}/security-managers/teams/{team_slug}
scope: orgs
type: API method
---

# Add a security manager team

Adds a team as a security manager for an organization. For more information, see "[Managing security for an organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) for an organization."

The authenticated user must be an administrator for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.

```js
octokit.rest.orgs.addSecurityManagerTeam({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/security-managers#add-a-security-manager-team).
