---
name: Update a discussion
example: octokit.rest.teams.updateDiscussionInOrg({ org, team_slug, discussion_number })
route: PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}
scope: teams
type: API method
---

# Update a discussion

Edits the title and body text of a discussion post. Only the parameters you provide are updated.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.

```js
octokit.rest.teams.updateDiscussionInOrg({
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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>team_slug</td><td>yes</td><td>

The slug of the team name.

</td></tr>
<tr><td>discussion_number</td><td>yes</td><td>

The number that identifies the discussion.

</td></tr>
<tr><td>title</td><td>no</td><td>

The discussion post's title.

</td></tr>
<tr><td>body</td><td>no</td><td>

The discussion post's body text.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/teams/discussions#update-a-discussion).
