---
name: Delete a self-hosted runner group from an enterprise
example: octokit.enterpriseAdmin.deleteSelfHostedRunnerGroupFromEnterprise({ enterprise, runner_group_id })
route: DELETE /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}
scope: enterpriseAdmin
type: API method
---

# Delete a self-hosted runner group from an enterprise

**Warning:** The self-hosted runners API for enterprise accounts is currently in public beta and subject to change.

Deletes a self-hosted runner group for an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.enterpriseAdmin.deleteSelfHostedRunnerGroupFromEnterprise({
  enterprise,
  runner_group_id,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/enterprise-admin/actions/#delete-a-self-hosted-runner-group-from-an-enterprise).
