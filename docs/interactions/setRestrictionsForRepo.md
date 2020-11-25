---
name: Set interaction restrictions for a repository
example: octokit.interactions.setRestrictionsForRepo({ owner, repo, limit })
route: PUT /repos/{owner}/{repo}/interaction-limits
scope: interactions
type: API method
---

# Set interaction restrictions for a repository

Temporarily restricts interactions to a certain type of GitHub user within the given repository. You must have owner or admin access to set these restrictions. If an interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.

```js
octokit.interactions.setRestrictionsForRepo({
  owner,
  repo,
  limit,
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
    <tr><td>owner</td><td>yes</td><td>

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>limit</td><td>yes</td><td>

The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. Can be one of: `existing_users`, `contributors_only`, `collaborators_only`.

</td></tr>
<tr><td>expiry</td><td>no</td><td>

The duration of the interaction restriction. Can be one of: `one_day`, `three_days`, `one_week`, `one_month`, `six_months`. Default: `one_day`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-a-repository).
