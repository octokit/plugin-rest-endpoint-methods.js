---
name: Delete team
example: octokit.teams.deleteInOrg({ org, team_slug })
route: DELETE /orgs/{org}/teams/{team_slug}
scope: teams
type: API method
---

# Delete team

To delete a team, the authenticated user must be an organization owner or team maintainer.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/:org_id/team/:team_id`.

If you are an organization owner, deleting a parent team will delete all of its child teams as well.

```js
octokit.teams.deleteInOrg({
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

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/teams/#delete-team).
