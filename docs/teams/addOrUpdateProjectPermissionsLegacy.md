---
name: Add or update team project permissions (Legacy)
example: octokit.rest.teams.addOrUpdateProjectPermissionsLegacy({ team_id, project_id })
route: PUT /teams/{team_id}/projects/{project_id}
scope: teams
type: API method
---

# Add or update team project permissions (Legacy)

**This method is deprecated.**

> [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience.
> See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.

```js
octokit.rest.teams.addOrUpdateProjectPermissionsLegacy({
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
<tr><td>permission</td><td>no</td><td>

The permission to grant to the team for this project. Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling this endpoint. For more information, see "[HTTP method](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#http-method)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/teams/teams#add-or-update-team-project-permissions-legacy).
