---
name: Set custom labels for a self-hosted runner for an organization
example: octokit.rest.actions.setCustomLabelsForSelfHostedRunnerForOrg({ org, runner_id, labels })
route: PUT /orgs/{org}/actions/runners/{runner_id}/labels
scope: actions
type: API method
---

# Set custom labels for a self-hosted runner for an organization

Remove all previous custom labels and set the new custom labels for a specific
self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.
If the repository is private, you must use an access token with the `repo` scope.
GitHub Apps must have the `administration` permission for repositories and the `organization_self_hosted_runners` permission for organizations.
Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises, to use these endpoints.

```js
octokit.rest.actions.setCustomLabelsForSelfHostedRunnerForOrg({
  org,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>runner_id</td><td>yes</td><td>

Unique identifier of the self-hosted runner.

</td></tr>
<tr><td>labels</td><td>yes</td><td>

The names of the custom labels to set for the runner. You can pass an empty array to remove all custom labels.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/self-hosted-runners#set-custom-labels-for-a-self-hosted-runner-for-an-organization).
