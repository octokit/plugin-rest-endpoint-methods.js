---
name: Add or update team project permissions
example: octokit.teams.addOrUpdateProjectPermissionsInOrg({ org, team_slug, project_id })
route: PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}
scope: teams
type: API method
---

# Add or update team project permissions

Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

```js
octokit.teams.addOrUpdateProjectPermissionsInOrg({
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

</td></tr>
<tr><td>project_id</td><td>yes</td><td>

</td></tr>
<tr><td>permission</td><td>no</td><td>

The permission to grant to the team for this project. Can be one of:  
\* `read` - team members can read, but not write to or administer this project.  
\* `write` - team members can read and write, but not administer this project.  
\* `admin` - team members can read, write and administer this project.  
Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/teams/#add-or-update-team-project-permissions).
