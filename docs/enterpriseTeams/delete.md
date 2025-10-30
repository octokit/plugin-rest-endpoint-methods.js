---
name: Delete an enterprise team
example: octokit.rest.enterpriseTeams.delete({ enterprise, team_slug })
route: DELETE /enterprises/{enterprise}/teams/{team_slug}
scope: enterpriseTeams
type: API method
---

# Delete an enterprise team

To delete an enterprise team, the authenticated user must be an enterprise owner.

If you are an enterprise owner, deleting an enterprise team will delete all of its IdP mappings as well.

```js
octokit.rest.enterpriseTeams.delete({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/enterprise-teams/enterprise-teams#delete-an-enterprise-team).
