---
name: Update a release asset
example: octokit.repos.updateReleaseAsset({ owner, repo, asset_id })
route: PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}
scope: repos
type: API method
---

# Update a release asset

Users with push access to the repository can edit a release asset.

```js
octokit.repos.updateReleaseAsset({
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

asset_id parameter

</td></tr>
<tr><td>name</td><td>no</td><td>

The file name of the asset.

</td></tr>
<tr><td>label</td><td>no</td><td>

An alternate short description of the asset. Used in place of the filename.

</td></tr>
<tr><td>state</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#update-a-release-asset).
