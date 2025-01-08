---
name: List team projects
example: octokit.rest.teams.listProjectsInOrg({ org, team_slug })
route: GET /orgs/{org}/teams/{team_slug}/projects
scope: teams
type: API method
---

# List team projects

Lists the organization projects for a team.

> [!NOTE]
> You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.

```js
octokit.rest.teams.listProjectsInOrg({
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
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/teams/teams#list-team-projects).
