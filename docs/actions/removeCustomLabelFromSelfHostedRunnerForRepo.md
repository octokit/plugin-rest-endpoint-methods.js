---
name: Remove a custom label from a self-hosted runner for a repository
example: octokit.rest.actions.removeCustomLabelFromSelfHostedRunnerForRepo({ owner, repo, runner_id, name })
route: DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}
scope: actions
type: API method
---

# Remove a custom label from a self-hosted runner for a repository

Remove a custom label from a self-hosted runner configured
in a repository. Returns the remaining labels from the runner.

This endpoint returns a `404 Not Found` status if the custom label is not
present on the runner.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

```js
octokit.rest.actions.removeCustomLabelFromSelfHostedRunnerForRepo({
  owner,
  repo,
  runner_id,
  name,
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
<tr><td>runner_id</td><td>yes</td><td>

Unique identifier of the self-hosted runner.

</td></tr>
<tr><td>name</td><td>yes</td><td>

The name of a self-hosted runner's custom label.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-a-repository).
