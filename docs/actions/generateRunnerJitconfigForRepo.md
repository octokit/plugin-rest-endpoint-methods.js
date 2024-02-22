---
name: Create configuration for a just-in-time runner for a repository
example: octokit.rest.actions.generateRunnerJitconfigForRepo({ owner, repo, name, runner_group_id, labels })
route: POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig
scope: actions
type: API method
---

# Create configuration for a just-in-time runner for a repository

Generates a configuration that can be passed to the runner application at startup.

The authenticated user must have admin access to the repository.

OAuth tokens and personal access tokens (classic) need the`repo` scope to use this endpoint.

```js
octokit.rest.actions.generateRunnerJitconfigForRepo({
  owner,
  repo,
  name,
  runner_group_id,
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
<tr><td>name</td><td>yes</td><td>

The name of the new runner.

</td></tr>
<tr><td>runner_group_id</td><td>yes</td><td>

The ID of the runner group to register the runner to.

</td></tr>
<tr><td>labels</td><td>yes</td><td>

The names of the custom labels to add to the runner. **Minimum items**: 1. **Maximum items**: 100.

</td></tr>
<tr><td>work_folder</td><td>no</td><td>

The working directory to be used for job execution, relative to the runner install directory.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/self-hosted-runners#create-configuration-for-a-just-in-time-runner-for-a-repository).
