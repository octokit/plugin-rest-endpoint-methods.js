---
name: Download an artifact
example: octokit.rest.actions.downloadArtifact({ owner, repo, artifact_id, archive_format })
route: GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}
scope: actions
type: API method
---

# Download an artifact

Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
the response header to find the URL for the download. The `:archive_format` must be `zip`.

OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.actions.downloadArtifact({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>artifact_id</td><td>yes</td><td>

The unique identifier of the artifact.

</td></tr>
<tr><td>archive_format</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/artifacts#download-an-artifact).
