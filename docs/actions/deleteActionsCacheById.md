---
name: Delete a GitHub Actions cache for a repository (using a cache ID)
example: octokit.rest.actions.deleteActionsCacheById({ owner, repo, cache_id })
route: DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}
scope: actions
type: API method
---

# Delete a GitHub Actions cache for a repository (using a cache ID)

Deletes a GitHub Actions cache for a repository, using a cache ID.

OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.actions.deleteActionsCacheById({
  owner,
  repo,
  cache_id,
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
<tr><td>cache_id</td><td>yes</td><td>

The unique identifier of the GitHub Actions cache.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/cache#delete-a-github-actions-cache-for-a-repository-using-a-cache-id).
