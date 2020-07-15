---
name: Download an artifact
example: octokit.actions.downloadArtifact({ owner, repo, artifact_id, archive_format })
route: GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}
scope: actions
type: API method
---

# Download an artifact

Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
GitHub Apps must have the `actions:read` permission to use this endpoint.

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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>artifact_id</td><td>yes</td><td>

</td></tr>
<tr><td>archive_format</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/artifacts/#download-an-artifact).
