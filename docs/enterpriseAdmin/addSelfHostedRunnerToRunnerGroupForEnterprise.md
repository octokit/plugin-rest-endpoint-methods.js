---
name: Add a self-hosted runner to a group for an enterprise
example: octokit.enterpriseAdmin.addSelfHostedRunnerToRunnerGroupForEnterprise({ enterprise, runner_group_id, runner_id })
route: PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}
scope: enterpriseAdmin
type: API method
---

# Add a self-hosted runner to a group for an enterprise

**Warning:** The self-hosted runner API for enterprise accounts is currently in public beta and subject to change.

Adds a self-hosted runner to a runner group configured in an enterprise.

You must authenticate using an access token with the `admin:enterprise`
scope to use this endpoint.

```js
octokit.enterpriseAdmin.addSelfHostedRunnerToRunnerGroupForEnterprise({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/enterprise-admin/actions/#add-a-self-hosted-runner-to-a-group-for-an-enterprise).
