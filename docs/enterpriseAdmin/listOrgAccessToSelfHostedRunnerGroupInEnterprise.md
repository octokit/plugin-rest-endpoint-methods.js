---
name: List organization access to a self-hosted runner group in an enterprise
example: octokit.enterpriseAdmin.listOrgAccessToSelfHostedRunnerGroupInEnterprise({ enterprise, runner_group_id })
route: GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations
scope: enterpriseAdmin
type: API method
---

# List organization access to a self-hosted runner group in an enterprise

Lists the organizations with access to a self-hosted runner group.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.enterpriseAdmin.listOrgAccessToSelfHostedRunnerGroupInEnterprise({
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/enterprise-admin/actions/#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise).
