---
name: Get a self-hosted runner for a repository
example: octokit.actions.getSelfHostedRunner({ owner, repo, runner_id })
route: GET /repos/{owner}/{repo}/actions/runners/{runner_id}
scope: actions
type: API method
---

# Get a self-hosted runner for a repository

**Deprecated:** This method has been renamed to actions.getSelfHostedRunnerForRepo

Gets a specific self-hosted runner. You must authenticate using an access token with the `repo` scope to use this endpoint.

```js
octokit.actions.getSelfHostedRunner({
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

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runners/#get-a-self-hosted-runner-for-a-repository).
