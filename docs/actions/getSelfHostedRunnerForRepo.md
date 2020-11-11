---
name: Get a self-hosted runner for a repository
example: octokit.actions.getSelfHostedRunnerForRepo({ owner, repo, runner_id })
route: GET /repos/{owner}/{repo}/actions/runners/{runner_id}
scope: actions
type: API method
---

# Get a self-hosted runner for a repository

Gets a specific self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this
endpoint.

```js
octokit.actions.getSelfHostedRunnerForRepo({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>runner_id</td><td>yes</td><td>

Unique identifier of the self-hosted runner.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-a-repository).
