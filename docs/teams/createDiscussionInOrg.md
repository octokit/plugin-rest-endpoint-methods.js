---
name: Create a discussion
example: octokit.rest.teams.createDiscussionInOrg({ org, team_slug, title, body })
route: POST /orgs/{org}/teams/{team_slug}/discussions
scope: teams
type: API method
---

# Create a discussion

Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-cloud@latest//rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.

```js
octokit.rest.teams.createDiscussionInOrg({
  org,
  team_slug,
  title,
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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>team_slug</td><td>yes</td><td>

The slug of the team name.

</td></tr>
<tr><td>title</td><td>yes</td><td>

The discussion post's title.

</td></tr>
<tr><td>body</td><td>yes</td><td>

The discussion post's body text.

</td></tr>
<tr><td>private</td><td>no</td><td>

Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/teams#create-a-discussion).
