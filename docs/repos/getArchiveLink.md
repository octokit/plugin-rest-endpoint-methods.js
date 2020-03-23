# Get archive link

Gets a redirect URL to download an archive for a repository. The `:archive_format` can be either `tarball` or `zipball`. The `:ref` must be a valid Git reference. If you omit `:ref`, the repository’s default branch (usually `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use the `Location` header to make a second `GET` request.

_Note_: For private repositories, these links are temporary and expire after five minutes.

To follow redirects with curl, use the `-L` switch:

```js
octokit.repos.getArchiveLink({
  owner,
  repo,
  archive_format,
  ref,
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
<tr><td>archive_format</td><td>yes</td><td>

archive_format parameter

</td></tr>
<tr><td>ref</td><td>yes</td><td>

ref parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
