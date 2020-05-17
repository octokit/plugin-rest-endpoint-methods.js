---
name: Delete a release asset
example: octokit.repos.deleteReleaseAsset({ owner, repo, asset_id })
route: DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}
scope: repos
type: API method
---

# Delete a release asset

```js
octokit.repos.deleteReleaseAsset({
  owner,
  repo,
  asset_id,
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
<tr><td>asset_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/releases/#delete-a-release-asset).
