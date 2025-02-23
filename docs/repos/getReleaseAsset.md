---
name: Get a release asset
example: octokit.rest.repos.getReleaseAsset({ owner, repo, asset_id })
route: GET /repos/{owner}/{repo}/releases/assets/{asset_id}
scope: repos
type: API method
---

# Get a release asset

To download the asset's binary content:

- If within a browser, fetch the location specified in the `browser_download_url` key provided in the response.
- Alternatively, set the `Accept` header of the request to
  [`application/octet-stream`](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types).
  The API will either redirect the client to the location, or stream it directly if possible.
  API clients should handle both a `200` or `302` response.

```js
octokit.rest.repos.getReleaseAsset({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>asset_id</td><td>yes</td><td>

The unique identifier of the asset.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/releases/assets#get-a-release-asset).
