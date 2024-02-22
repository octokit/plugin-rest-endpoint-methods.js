---
name: Remove all custom labels from a self-hosted runner for an organization
example: octokit.rest.actions.removeAllCustomLabelsFromSelfHostedRunnerForOrg({ org, runner_id })
route: DELETE /orgs/{org}/actions/runners/{runner_id}/labels
scope: actions
type: API method
---

# Remove all custom labels from a self-hosted runner for an organization

Remove all custom labels from a self-hosted runner configured in an
organization. Returns the remaining read-only labels from the runner.

Authenticated users must have admin access to the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.

```js
octokit.rest.actions.removeAllCustomLabelsFromSelfHostedRunnerForOrg({
  org,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>runner_id</td><td>yes</td><td>

Unique identifier of the self-hosted runner.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/self-hosted-runners#remove-all-custom-labels-from-a-self-hosted-runner-for-an-organization).
