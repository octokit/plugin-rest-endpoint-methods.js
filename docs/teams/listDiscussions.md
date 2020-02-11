# List discussions (Legacy)

**This method is deprecated.**

**Deprecated:** This method has been renamed to teams.listDiscussionsLegacy

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://developer.github.com/v3/teams/discussions/#list-discussions) endpoint.

List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

```js
octokit.teams.listDiscussions({
  team_id
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
<tr><td>direction</td><td>no</td><td>

Sorts the discussion comments by the date they were created. To return the oldest comments first, set to `asc`. Can be one of `asc` or `desc`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
