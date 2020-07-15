---
name: Create a discussion comment
example: octokit.teams.createDiscussionCommentInOrg({ org, team_slug, discussion_number, body })
route: POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments
scope: teams
type: API method
---

# Create a discussion comment

Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.

```js
octokit.teams.createDiscussionCommentInOrg({
  org,
  team_slug,
  discussion_number,
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
<tr><td>body</td><td>yes</td><td>

The discussion comment's body text.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/teams/discussion_comments/#create-a-discussion-comment).
