# Edit a discussion (Legacy)

**This method is deprecated.**

**Deprecated:** This method has been renamed to teams.updateDiscussionLegacy

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Edit a discussion`](https://developer.github.com/v3/teams/discussions/#edit-a-discussion) endpoint.

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

```js
octokit.teams.updateDiscussion(team_id, discussion_number);
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
<tr><td>title</td><td>no</td><td>

The discussion post's title.

</td></tr>
<tr><td>body</td><td>no</td><td>

The discussion post's body text.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
