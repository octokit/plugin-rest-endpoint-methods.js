---
name: Delete a release asset
example: octokit.rest.repos.deleteReleaseAsset({ owner, repo, asset_id })
route: DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}
scope: repos
type: API method
---

# Delete a release asset

```js
octokit.rest.repos.deleteReleaseAsset({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>asset_id</td><td>yes</td><td>

The unique identifier of the asset.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/repos#delete-a-release-asset).
