# Edit a comment (Legacy)

**This method is deprecated.**

**Deprecated:** This method has been renamed to teams.updateDiscussionCommentLegacy

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Edit a comment`](https://developer.github.com/v3/teams/discussion_comments/#edit-a-comment) endpoint.

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

```js
octokit.teams.updateDiscussionComment(
  team_id,
  discussion_number,
  comment_number,
  body
);
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
<tr><td>body</td><td>yes</td><td>

The discussion comment's body text.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
