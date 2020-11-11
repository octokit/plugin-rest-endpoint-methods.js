---
name: Delete a self-hosted runner from a repository
example: octokit.actions.deleteSelfHostedRunnerFromRepo({ owner, repo, runner_id })
route: DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}
scope: actions
type: API method
---

# Delete a self-hosted runner from a repository

Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `repo`
scope to use this endpoint.

```js
octokit.actions.deleteSelfHostedRunnerFromRepo({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>runner_id</td><td>yes</td><td>

Unique identifier of the self-hosted runner.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository).
