---
name: Get an artifact
example: octokit.actions.getArtifact({ owner, repo, artifact_id })
route: GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}
scope: actions
type: API method
---

# Get an artifact

Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions` permission to use this endpoint.

```js
octokit.actions.getArtifact({
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>artifact_id</td><td>yes</td><td>

artifact_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/artifacts/#get-an-artifact).
