# Delete a discussion

Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number`.

```js
octokit.teams.deleteDiscussionInOrg({
  org,
  team_slug,
  discussion_number,
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

org parameter

</td></tr>
<tr><td>team_slug</td><td>yes</td><td>

team_slug parameter

</td></tr>
<tr><td>discussion_number</td><td>yes</td><td>

discussion_number parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/teams/discussions/#delete-a-discussion).
