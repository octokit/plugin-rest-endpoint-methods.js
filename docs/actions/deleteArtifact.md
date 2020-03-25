# Delete an artifact

Deletes an artifact for a workflow run. Anyone with write access to the repository can use this endpoint. GitHub Apps must have the `actions` permission to use this endpoint.

```js
octokit.actions.deleteArtifact({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/artifacts/#delete-an-artifact).
