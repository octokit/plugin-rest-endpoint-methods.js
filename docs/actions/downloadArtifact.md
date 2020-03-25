# Download an artifact

Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.

Call this endpoint using the `-v` flag, which enables verbose output and allows you to see the download URL in the header. To download the file into the current working directory, specify the filename using the `-o` flag.

```js
octokit.actions.downloadArtifact({
  owner,
  repo,
  artifact_id,
  archive_format,
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>artifact_id</td><td>yes</td><td>

artifact_id parameter

</td></tr>
<tr><td>archive_format</td><td>yes</td><td>

archive_format parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/artifacts/#download-an-artifact).
