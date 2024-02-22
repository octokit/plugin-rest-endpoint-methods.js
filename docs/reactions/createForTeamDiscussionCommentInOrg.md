---
name: Create reaction for a team discussion comment
example: octokit.rest.reactions.createForTeamDiscussionCommentInOrg({ org, team_slug, discussion_number, comment_number, content })
route: POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions
scope: reactions
type: API method
---

# Create reaction for a team discussion comment

Create a reaction to a [team discussion comment](https://docs.github.com/rest/teams/discussion-comments#get-a-discussion-comment).

A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.

```js
octokit.rest.reactions.createForTeamDiscussionCommentInOrg({
  org,
  team_slug,
  discussion_number,
  comment_number,
  content,
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
<tr><td>comment_number</td><td>yes</td><td>

The number that identifies the comment.

</td></tr>
<tr><td>content</td><td>yes</td><td>

The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the team discussion comment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reactions/reactions#create-reaction-for-a-team-discussion-comment).
