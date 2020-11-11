---
name: Upload a release asset
example: octokit.repos.uploadReleaseAsset({ owner, repo, release_id, data })
route: POST {origin}/repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}
scope: repos
type: API method
---

# Upload a release asset

This endpoint makes use of [a Hypermedia relation](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
the response of the [Create a release endpoint](https://docs.github.com/rest/reference/repos#create-a-release) to upload a release asset.

You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.

Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example:

`application/zip`

GitHub expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
you'll still need to pass your authentication to be able to upload an asset.

When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.

**Notes:**

- GitHub renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://docs.github.com/rest/reference/repos#list-assets-for-a-release)"
  endpoint lists the renamed filenames. For more information and help, contact [GitHub Support](https://github.com/contact).
- If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.

```js
octokit.repos.uploadReleaseAsset({
  owner,
  repo,
  release_id,
  data
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

release_id parameter

</td></tr>
<tr><td>name</td><td>no</td><td>

</td></tr>
<tr><td>label</td><td>no</td><td>

</td></tr>
<tr><td>data</td><td>yes</td><td>

The raw file data

</td></tr>
<tr><td>origin</td><td>no</td><td>

The URL origin (protocol + host name + port) is included in `upload_url` returned in the response of the "Create a release" endpoint

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#upload-a-release-asset).
