---
name: List labels for a self-hosted runner for a repository
example: octokit.rest.actions.listLabelsForSelfHostedRunnerForRepo({ owner, repo, runner_id })
route: GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels
scope: actions
type: API method
---

# List labels for a self-hosted runner for a repository

Lists all labels for a self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

```js
octokit.rest.actions.listLabelsForSelfHostedRunnerForRepo({
  owner,
  repo,
  runner_id,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-labels-for-a-self-hosted-runner-for-a-repository).
