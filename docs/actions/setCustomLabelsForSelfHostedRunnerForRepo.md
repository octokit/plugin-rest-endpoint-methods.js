---
name: Set custom labels for a self-hosted runner for a repository
example: octokit.rest.actions.setCustomLabelsForSelfHostedRunnerForRepo({ owner, repo, runner_id, labels })
route: PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels
scope: actions
type: API method
---

# Set custom labels for a self-hosted runner for a repository

Remove all previous custom labels and set the new custom labels for a specific
self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

```js
octokit.rest.actions.setCustomLabelsForSelfHostedRunnerForRepo({
  owner,
  repo,
  runner_id,
  labels,
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
<tr><td>runner_id</td><td>yes</td><td>

Unique identifier of the self-hosted runner.

</td></tr>
<tr><td>labels</td><td>yes</td><td>

The names of the custom labels to set for the runner. You can pass an empty array to remove all custom labels.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-a-repository).
