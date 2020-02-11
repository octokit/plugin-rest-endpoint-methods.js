# Remove a self-hosted runner

Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. Anyone with admin access to the repository can use this endpoint. GitHub Apps must have the `administration` permission to use this endpoint.

```js
octokit.actions.removeSelfHostedRunner({
  owner,
  repo,
  runner_id
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
<tr><td>runner_id</td><td>yes</td><td>

runner_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
