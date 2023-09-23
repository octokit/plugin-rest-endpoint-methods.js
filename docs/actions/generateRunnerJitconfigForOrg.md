---
name: Create configuration for a just-in-time runner for an organization
example: octokit.rest.actions.generateRunnerJitconfigForOrg({ org, name, runner_group_id, labels })
route: POST /orgs/{org}/actions/runners/generate-jitconfig
scope: actions
type: API method
---

# Create configuration for a just-in-time runner for an organization

Generates a configuration that can be passed to the runner application at startup.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.
If the repository is private, you must use an access token with the `repo` scope.
GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.

```js
octokit.rest.actions.generateRunnerJitconfigForOrg({
  org,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/self-hosted-runners#create-configuration-for-a-just-in-time-runner-for-an-organization).
