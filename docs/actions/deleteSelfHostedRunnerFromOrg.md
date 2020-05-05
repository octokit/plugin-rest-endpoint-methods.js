---
name: Delete a self-hosted runner from an organization
example: octokit.actions.deleteSelfHostedRunnerFromOrg({ org, runner_id })
route: DELETE /orgs/{org}/actions/runners/{runner_id}
scope: actions
type: API method
---

# Delete a self-hosted runner from an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.

Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. Anyone with admin access to the organization can use this endpoint.

```js
octokit.actions.deleteSelfHostedRunnerFromOrg({
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

org parameter

</td></tr>
<tr><td>runner_id</td><td>yes</td><td>

runner_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runners/#delete-a-self-hosted-runner-from-an-organization).
