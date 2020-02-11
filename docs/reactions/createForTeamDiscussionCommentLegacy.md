# Create reaction for a team discussion comment (Legacy)

**This method is deprecated.**

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion comment`](https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment) endpoint.

Create a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion comment.

```js
octokit.reactions.createForTeamDiscussionCommentLegacy({
  team_id,
  discussion_number,
  comment_number,
  content
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
<tr><td>discussion_number</td><td>yes</td><td>

discussion_number parameter

</td></tr>
<tr><td>comment_number</td><td>yes</td><td>

comment_number parameter

</td></tr>
<tr><td>content</td><td>yes</td><td>

The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion comment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
