# Add or update team repository (Legacy)

**This method is deprecated.**

**Deprecated:** This method has been renamed to teams.addOrUpdateRepoLegacy

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Add or update team repository`](https://developer.github.com/v3/teams/#add-or-update-team-repository) endpoint.

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

```js
octokit.teams.addOrUpdateRepo({
  team_id,
  owner,
  repo
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

team_id parameter

</td></tr>
<tr><td>owner</td><td>yes</td><td>

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>permission</td><td>no</td><td>

The permission to grant the team on this repository. Can be one of:  
\* `pull` - team members can pull, but not push to or administer this repository.  
\* `push` - team members can pull and push, but not administer this repository.  
\* `admin` - team members can pull, push and administer this repository.

If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
