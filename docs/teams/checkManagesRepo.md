# Check if a team manages a repository (Legacy)

**This method is deprecated.**

**Deprecated:** This method has been renamed to teams.checkManagesRepoLegacy

**Note**: Repositories inherited through a parent team will also be checked.

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Check if a team manages a repository`](https://developer.github.com/v3/teams/#check-if-a-team-manages-a-repository) endpoint.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:

```js
octokit.teams.checkManagesRepo(team_id, owner, repo);
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
<tr><td>owner</td><td>yes</td><td>

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
