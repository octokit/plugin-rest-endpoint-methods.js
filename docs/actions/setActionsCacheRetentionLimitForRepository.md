---
name: Set GitHub Actions cache retention limit for a repository
example: octokit.rest.actions.setActionsCacheRetentionLimitForRepository({ owner, repo })
route: PUT /repos/{owner}/{repo}/actions/cache/retention-limit
scope: actions
type: API method
---

# Set GitHub Actions cache retention limit for a repository

Sets GitHub Actions cache retention limit for a repository. This determines how long caches will be retained for, if
not manually removed or evicted due to size constraints.

OAuth tokens and personal access tokens (classic) need the `admin:repository` scope to use this endpoint.

```js
octokit.rest.actions.setActionsCacheRetentionLimitForRepository({
  owner,
  repo,
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>max_cache_retention_days</td><td>no</td><td>

The maximum number of days to keep caches in this repository.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/cache#set-github-actions-cache-retention-limit-for-a-repository).
