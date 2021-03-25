---
name: Delete an artifact
example: octokit.rest.actions.deleteArtifact({ owner, repo, artifact_id })
route: DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}
scope: actions
type: API method
---

# Delete an artifact

Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

```js
octokit.rest.actions.deleteArtifact({
  owner,
  repo,
  artifact_id,
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

artifact_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#delete-an-artifact).
