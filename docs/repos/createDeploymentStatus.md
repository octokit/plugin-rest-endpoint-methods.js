---
name: Create a deployment status
example: octokit.rest.repos.createDeploymentStatus({ owner, repo, deployment_id, state })
route: POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses
scope: repos
type: API method
---

# Create a deployment status

Users with `push` access can create deployment statuses for a given deployment.

GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth apps require the `repo_deployment` scope.

```js
octokit.rest.repos.createDeploymentStatus({
  owner,
  repo,
  deployment_id,
  state,
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
<tr><td>deployment_id</td><td>yes</td><td>

deployment_id parameter

</td></tr>
<tr><td>state</td><td>yes</td><td>

The state of the status. When you set a transient deployment to `inactive`, the deployment will be shown as `destroyed` in GitHub.

</td></tr>
<tr><td>target_url</td><td>no</td><td>

The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. **Note:** It's recommended to use the `log_url` parameter, which replaces `target_url`.

</td></tr>
<tr><td>log_url</td><td>no</td><td>

The full URL of the deployment's output. This parameter replaces `target_url`. We will continue to accept `target_url` to support legacy uses, but we recommend replacing `target_url` with `log_url`. Setting `log_url` will automatically set `target_url` to the same value. Default: `""`

</td></tr>
<tr><td>description</td><td>no</td><td>

A short description of the status. The maximum description length is 140 characters.

</td></tr>
<tr><td>environment</td><td>no</td><td>

Name for the target deployment environment, which can be changed when setting a deploy status. For example, `production`, `staging`, or `qa`. If not defined, the environment of the previous status on the deployment will be used, if it exists. Otherwise, the environment of the deployment will be used.

</td></tr>
<tr><td>environment_url</td><td>no</td><td>

Sets the URL for accessing your environment. Default: `""`

</td></tr>
<tr><td>auto_inactive</td><td>no</td><td>

Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. An `inactive` status is only added to deployments that had a `success` state. Default: `true`

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/deployments/statuses#create-a-deployment-status).
