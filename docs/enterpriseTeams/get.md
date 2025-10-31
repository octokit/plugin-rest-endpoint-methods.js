---
name: Get an enterprise team
example: octokit.rest.enterpriseTeams.get({ enterprise, team_slug })
route: GET /enterprises/{enterprise}/teams/{team_slug}
scope: enterpriseTeams
type: API method
---

# Get an enterprise team

Gets a team using the team's slug. To create the slug, GitHub replaces special characters in the name string, changes all words to lowercase, and replaces spaces with a `-` separator and adds the "ent:" prefix. For example, "My TEam Näme" would become `ent:my-team-name`.

```js
octokit.rest.enterpriseTeams.get({
  enterprise,
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
    <tr><td>enterprise</td><td>yes</td><td>

The slug version of the enterprise name.

</td></tr>
<tr><td>team_slug</td><td>yes</td><td>

The slug of the team name.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/enterprise-teams/enterprise-teams#get-an-enterprise-team).
