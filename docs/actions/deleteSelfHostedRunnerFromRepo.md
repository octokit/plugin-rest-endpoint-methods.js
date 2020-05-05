---
name: Delete a self-hosted runner from a repository
example: octokit.actions.deleteSelfHostedRunnerFromRepo({ owner, repo, runner_id })
route: DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}
scope: actions
type: API method
---

# Delete a self-hosted runner from a repository

Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. Anyone with admin access to the repository and an access token with the `repo` scope can use this endpoint.

```js
octokit.actions.deleteSelfHostedRunnerFromRepo({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runners/#delete-a-self-hosted-runner-from-a-repository).
