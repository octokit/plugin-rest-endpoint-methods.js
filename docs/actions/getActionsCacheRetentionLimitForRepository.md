---
name: Get GitHub Actions cache retention limit for a repository
example: octokit.rest.actions.getActionsCacheRetentionLimitForRepository({ owner, repo })
route: GET /repos/{owner}/{repo}/actions/cache/retention-limit
scope: actions
type: API method
---

# Get GitHub Actions cache retention limit for a repository

Gets GitHub Actions cache retention limit for a repository. This determines how long caches will be retained for, if
not manually removed or evicted due to size constraints.

OAuth tokens and personal access tokens (classic) need the `admin:repository` scope to use this endpoint.

```js
octokit.rest.actions.getActionsCacheRetentionLimitForRepository({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/cache#get-github-actions-cache-retention-limit-for-a-repository).
