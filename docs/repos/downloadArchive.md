---
name: Download a repository archive
example: octokit.repos.downloadArchive({ owner, repo, archive_format, ref })
route: GET /repos/{owner}/{repo}/{archive_format}/{ref}
scope: repos
type: API method
---

# Download a repository archive

Gets a redirect URL to download an archive for a repository. The `:archive_format` can be either `tarball` or
`zipball`. The `:ref` must be a valid Git reference. If you omit `:ref`, the repository’s default branch (usually
`master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
the `Location` header to make a second `GET` request.

**Note**: For private repositories, these links are temporary and expire after five minutes.

```js
octokit.repos.downloadArchive({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>archive_format</td><td>yes</td><td>

</td></tr>
<tr><td>ref</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/contents/#download-a-repository-archive).
