# Upload a release asset

This endpoint makes use of [a Hypermedia relation](https://developer.github.com/v3/#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in the response of the [Create a release endpoint](https://developer.github.com/v3/repos/releases/#create-a-release) to upload a release asset.

    You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.

    Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example:

    `application/zip`

    GitHub expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example, you'll still need to pass your authentication to be able to upload an asset.

```js
octokit.repos.uploadReleaseAsset({
        data,
headers,
headers.content-length,
headers.content-type,
name,
url
      })
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
    <tr><td>data</td><td>yes</td><td>

undefined

</td></tr>
<tr><td>file</td><td>no</td><td>

undefined

</td></tr>
<tr><td>headers</td><td>yes</td><td>

undefined

</td></tr>
<tr><td>headers.content-length</td><td>yes</td><td>

undefined

</td></tr>
<tr><td>headers.content-type</td><td>yes</td><td>

undefined

</td></tr>
<tr><td>label</td><td>no</td><td>

An alternate short description of the asset. Used in place of the filename. This should be set in a URI query parameter.

</td></tr>
<tr><td>name</td><td>yes</td><td>

The file name of the asset. This should be set in a URI query parameter.

</td></tr>
<tr><td>url</td><td>yes</td><td>

The `upload_url` key returned from creating or getting a release

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
