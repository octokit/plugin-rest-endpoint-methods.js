---
name: Delete team discussion reaction
example: octokit.rest.reactions.deleteForTeamDiscussion({ org, team_slug, discussion_number, reaction_id })
route: DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}
scope: reactions
type: API method
---

# Delete team discussion reaction

**Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.

Delete a reaction to a [team discussion](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

```js
octokit.rest.reactions.deleteForTeamDiscussion({
  org,
  team_slug,
  discussion_number,
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
<tr><td>reaction_id</td><td>yes</td><td>

The unique identifier of the reaction.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/reactions#delete-team-discussion-reaction).
