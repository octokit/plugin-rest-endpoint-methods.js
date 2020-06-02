---
name: Get a discussion comment
example: octokit.teams.getDiscussionCommentInOrg({ org, team_slug, discussion_number, comment_number })
route: GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}
scope: teams
type: API method
---

# Get a discussion comment

Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number`.

```js
octokit.teams.getDiscussionCommentInOrg({
  org,
  team_slug,
  discussion_number,
  comment_number,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/teams/discussion_comments/#get-a-discussion-comment).
