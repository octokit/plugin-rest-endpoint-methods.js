---
name: Delete team discussion comment reaction
example: octokit.rest.reactions.deleteForTeamDiscussionComment({ org, team_slug, discussion_number, comment_number, reaction_id })
route: DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}
scope: reactions
type: API method
---

# Delete team discussion comment reaction

**Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.

Delete a reaction to a [team discussion comment](https://docs.github.com/rest/teams/discussion-comments#get-a-discussion-comment).

OAuth app tokens and personal access tokens (classic) need the `write:discussion` scope to use this endpoint.

```js
octokit.rest.reactions.deleteForTeamDiscussionComment({
  org,
  team_slug,
  discussion_number,
  comment_number,
  reaction_id,
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
<tr><td>reaction_id</td><td>yes</td><td>

The unique identifier of the reaction.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reactions/reactions#delete-team-discussion-comment-reaction).
