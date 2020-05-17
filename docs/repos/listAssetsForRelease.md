---
name: List assets for a release
example: octokit.repos.listAssetsForRelease({ owner, repo, release_id })
route: GET /repos/{owner}/{repo}/releases/{release_id}/assets
scope: repos
type: API method
---

# List assets for a release

```js
octokit.repos.listAssetsForRelease({
  owner,
  repo,
  release_id,
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
<tr><td>release_id</td><td>yes</td><td>

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/releases/#list-assets-for-a-release).
