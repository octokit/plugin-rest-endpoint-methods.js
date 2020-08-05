---
name: Set organization access for a self-hosted runner group in an enterprise
example: octokit.enterpriseAdmin.setOrgAccessToSelfHostedRunnerGroupInEnterprise({ enterprise, runner_group_id, selected_organization_ids })
route: PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations
scope: enterpriseAdmin
type: API method
---

# Set organization access for a self-hosted runner group in an enterprise

**Warning:** The self-hosted runners API for enterprises is currently in public beta and subject to change.

Replaces the list of organizations that have access to a self-hosted runner group configured in an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.enterpriseAdmin.setOrgAccessToSelfHostedRunnerGroupInEnterprise({
  enterprise,
  runner_group_id,
  selected_organization_ids,
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
<tr><td>selected_organization_ids</td><td>yes</td><td>

List of organization IDs that can access the runner group.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/enterprise-admin/actions/#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise).
