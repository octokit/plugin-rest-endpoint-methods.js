---
name: Check team permissions for a project (Legacy)
example: octokit.rest.teams.checkPermissionsForProjectLegacy({ team_id, project_id })
route: GET /teams/{team_id}/projects/{project_id}
scope: teams
type: API method
---

# Check team permissions for a project (Legacy)

**This method is deprecated.**

> [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience.
> See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.

```js
octokit.rest.teams.checkPermissionsForProjectLegacy({
  team_id,
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
    <tr><td>team_id</td><td>yes</td><td>

The unique identifier of the team.

</td></tr>
<tr><td>project_id</td><td>yes</td><td>

The unique identifier of the project.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/teams/teams#check-team-permissions-for-a-project-legacy).
