# Upload a release asset

This endpoint makes use of [a Hypermedia relation](https://developer.github.com/v3/#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in the response of the [Create a release endpoint](https://developer.github.com/v3/repos/releases/#create-a-release) to upload a release asset.

You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.

Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example:

`application/zip`

GitHub expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example, you'll still need to pass your authentication to be able to upload an asset.

**Notes:**

- GitHub renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://developer.github.com/v3/repos/releases/#list-assets-for-a-release)" endpoint lists the renamed filenames. For more information and help, contact [GitHub Support](https://github.com/contact).
- If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.

This may leave an empty asset with a state of `starter`. It can be safely deleted.

```js
octokit.repos.uploadReleaseAsset(owner, repo, release_id, data);
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>release_id</td><td>yes</td><td>

release_id parameter

</td></tr>
<tr><td>name</td><td>no</td><td>

name parameter

</td></tr>
<tr><td>label</td><td>no</td><td>

label parameter

</td></tr>
<tr><td>data</td><td>yes</td><td>

The raw file data

</td></tr>
<tr><td>origin</td><td>no</td><td>

The URL origin (protocol + host name + port) is included in `upload_url` returned in the response of the "Create a release" endpoint

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
