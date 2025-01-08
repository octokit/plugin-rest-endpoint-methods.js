---
name: Remove a security manager team
example: octokit.rest.orgs.removeSecurityManagerTeam({ org, team_slug })
route: DELETE /orgs/{org}/security-managers/teams/{team_slug}
scope: orgs
type: API method
---

# Remove a security manager team

**This method is deprecated.**

> [!WARNING] > **Closing down notice:** This operation is closing down and will be removed starting January 1, 2026. Please use the "[Organization Roles](https://docs.github.com/rest/orgs/organization-roles)" endpoints instead.

```js
octokit.rest.orgs.removeSecurityManagerTeam({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/security-managers#remove-a-security-manager-team).
