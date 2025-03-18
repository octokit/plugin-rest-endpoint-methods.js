---
name: Remove a project from a team (Legacy)
example: octokit.rest.teams.removeProjectLegacy({ team_id, project_id })
route: DELETE /teams/{team_id}/projects/{project_id}
scope: teams
type: API method
---

# Remove a project from a team (Legacy)

**This method is deprecated.**

> [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience.
> See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.

```js
octokit.rest.teams.removeProjectLegacy({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/teams/teams#remove-a-project-from-a-team-legacy).
