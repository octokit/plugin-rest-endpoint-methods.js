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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>artifact_id</td><td>yes</td><td>

The unique identifier of the artifact.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#delete-an-artifact).
