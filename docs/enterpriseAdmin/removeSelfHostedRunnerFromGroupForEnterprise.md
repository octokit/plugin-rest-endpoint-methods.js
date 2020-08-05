---
name: Remove a self-hosted runner from a group for an enterprise
example: octokit.enterpriseAdmin.removeSelfHostedRunnerFromGroupForEnterprise({ enterprise, runner_group_id, runner_id })
route: DELETE /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}
scope: enterpriseAdmin
type: API method
---

# Remove a self-hosted runner from a group for an enterprise

Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.enterpriseAdmin.removeSelfHostedRunnerFromGroupForEnterprise({
  enterprise,
  runner_group_id,
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
    <tr><td>enterprise</td><td>yes</td><td>

The slug version of the enterprise name. You can also substitute this value with the enterprise id.

</td></tr>
<tr><td>runner_group_id</td><td>yes</td><td>

Unique identifier of the self-hosted runner group.

</td></tr>
<tr><td>runner_id</td><td>yes</td><td>

Unique identifier of the self-hosted runner.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/enterprise-admin/actions/#remove-a-self-hosted-runner-from-a-group-for-an-enterprise).
