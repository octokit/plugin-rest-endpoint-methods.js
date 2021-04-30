---
name: Check team permissions for a project
example: octokit.rest.teams.checkPermissionsForProjectInOrg({ org, team_slug, project_id })
route: GET /orgs/{org}/teams/{team_slug}/projects/{project_id}
scope: teams
type: API method
---

# Check team permissions for a project

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

```js
octokit.rest.teams.checkPermissionsForProjectInOrg({
  org,
  team_slug,
  project_id,
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
<tr><td>project_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/teams#check-team-permissions-for-a-project).
