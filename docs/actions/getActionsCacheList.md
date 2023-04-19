---
name: List GitHub Actions caches for a repository
example: octokit.rest.actions.getActionsCacheList({ owner, repo })
route: GET /repos/{owner}/{repo}/actions/caches
scope: actions
type: API method
---

# List GitHub Actions caches for a repository

Lists the GitHub Actions caches for a repository.
You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `actions:read` permission to use this endpoint.

```js
octokit.rest.actions.getActionsCacheList({
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>ref</td><td>no</td><td>

The full Git reference for narrowing down the cache. The `ref` for a branch should be formatted as `refs/heads/<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.

</td></tr>
<tr><td>key</td><td>no</td><td>

An explicit key or prefix for identifying the cache

</td></tr>
<tr><td>sort</td><td>no</td><td>

The property to sort the results by. `created_at` means when the cache was created. `last_accessed_at` means when the cache was last accessed. `size_in_bytes` is the size of the cache in bytes.

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction to sort the results by.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/cache#list-github-actions-caches-for-a-repository).
