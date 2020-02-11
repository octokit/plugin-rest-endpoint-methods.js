# Review a team project (Legacy)

**This method is deprecated.**

**Deprecated:** This method has been renamed to teams.reviewProjectLegacy

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Review a team project`](https://developer.github.com/v3/teams/#review-a-team-project) endpoint.

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.

```js
octokit.teams.reviewProject({
  team_id,
  project_id
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
<tr><td>project_id</td><td>yes</td><td>

project_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
