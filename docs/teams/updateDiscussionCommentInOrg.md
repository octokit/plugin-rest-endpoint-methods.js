---
name: Update a discussion comment
example: octokit.teams.updateDiscussionCommentInOrg({ org, team_slug, discussion_number, comment_number, body })
route: PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}
scope: teams
type: API method
---

# Update a discussion comment

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

```js
octokit.teams.updateDiscussionCommentInOrg({
  org,
  team_slug,
  discussion_number,
  comment_number,
  body,
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
<tr><td>discussion_number</td><td>yes</td><td>

</td></tr>
<tr><td>comment_number</td><td>yes</td><td>

</td></tr>
<tr><td>body</td><td>yes</td><td>

The discussion comment's body text.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/teams/discussion_comments/#update-a-discussion-comment).
