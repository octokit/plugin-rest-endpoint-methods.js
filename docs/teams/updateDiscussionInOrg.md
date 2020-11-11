---
name: Update a discussion
example: octokit.teams.updateDiscussionInOrg({ org, team_slug, discussion_number })
route: PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}
scope: teams
type: API method
---

# Update a discussion

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

```js
octokit.teams.updateDiscussionInOrg({
  org,
  team_slug,
  discussion_number
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

team_slug parameter

</td></tr>
<tr><td>discussion_number</td><td>yes</td><td>

</td></tr>
<tr><td>title</td><td>no</td><td>

The discussion post's title.

</td></tr>
<tr><td>body</td><td>no</td><td>

The discussion post's body text.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/teams#update-a-discussion).
