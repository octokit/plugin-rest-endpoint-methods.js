---
name: Delete a self-hosted runner from an enterprise
example: octokit.enterpriseAdmin.deleteSelfHostedRunnerFromEnterprise({ enterprise, runner_id })
route: DELETE /enterprises/{enterprise}/actions/runners/{runner_id}
scope: enterpriseAdmin
type: API method
---

# Delete a self-hosted runner from an enterprise

Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.enterpriseAdmin.deleteSelfHostedRunnerFromEnterprise({
  enterprise,
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
<tr><td>runner_id</td><td>yes</td><td>

Unique identifier of the self-hosted runner.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/enterprise-admin/actions/#delete-self-hosted-runner-from-an-enterprise).
