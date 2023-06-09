---
name: Delete GitHub Actions caches for a repository (using a cache key)
example: octokit.rest.actions.deleteActionsCacheByKey({ owner, repo, key })
route: DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}
scope: actions
type: API method
---

# Delete GitHub Actions caches for a repository (using a cache key)

Deletes one or more GitHub Actions caches for a repository, using a complete cache key. By default, all caches that match the provided key are deleted, but you can optionally provide a Git ref to restrict deletions to caches that match both the provided key and the Git ref.

You must authenticate using an access token with the `repo` scope to use this endpoint.

GitHub Apps must have the `actions:write` permission to use this endpoint.

```js
octokit.rest.actions.deleteActionsCacheByKey({
  owner,
  repo,
  key,
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
<tr><td>key</td><td>yes</td><td>

A key for identifying the cache.

</td></tr>
<tr><td>ref</td><td>no</td><td>

The full Git reference for narrowing down the cache. The `ref` for a branch should be formatted as `refs/heads/<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/cache#delete-github-actions-caches-for-a-repository-using-a-cache-key).
