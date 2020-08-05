---
name: Update a self-hosted runner group for an enterprise
example: octokit.enterpriseAdmin.updateSelfHostedRunnerGroupForEnterprise({ enterprise, runner_group_id })
route: PATCH /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}
scope: enterpriseAdmin
type: API method
---

# Update a self-hosted runner group for an enterprise

Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.enterpriseAdmin.updateSelfHostedRunnerGroupForEnterprise({
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
<tr><td>name</td><td>no</td><td>

Name of the runner group.

</td></tr>
<tr><td>visibility</td><td>no</td><td>

Visibility of a runner group. You can select all organizations or select individual organizations. Can be one of: `all` or `selected`

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/enterprise-admin/actions/#update-a-self-hosted-runner-group-for-an-enterprise).
