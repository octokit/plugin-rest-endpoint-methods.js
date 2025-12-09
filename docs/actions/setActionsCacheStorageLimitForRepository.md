---
name: Set GitHub Actions cache storage limit for a repository
example: octokit.rest.actions.setActionsCacheStorageLimitForRepository({ owner, repo })
route: PUT /repos/{owner}/{repo}/actions/cache/storage-limit
scope: actions
type: API method
---

# Set GitHub Actions cache storage limit for a repository

Sets GitHub Actions cache storage limit for a repository. This determines the maximum size of caches that can be
stored before eviction occurs.

OAuth tokens and personal access tokens (classic) need the `admin:repository` scope to use this endpoint.

```js
octokit.rest.actions.setActionsCacheStorageLimitForRepository({
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
<tr><td>max_cache_size_gb</td><td>no</td><td>

The maximum total cache size for this repository, in gigabytes.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/cache#set-github-actions-cache-storage-limit-for-a-repository).
