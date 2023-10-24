---
name: Add custom labels to a self-hosted runner for a repository
example: octokit.rest.actions.addCustomLabelsToSelfHostedRunnerForRepo({ owner, repo, runner_id, labels })
route: POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels
scope: actions
type: API method
---

# Add custom labels to a self-hosted runner for a repository

Add custom labels to a self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.

```js
octokit.rest.actions.addCustomLabelsToSelfHostedRunnerForRepo({
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

The names of the custom labels to add to the runner.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/self-hosted-runners#add-custom-labels-to-a-self-hosted-runner-for-a-repository).
