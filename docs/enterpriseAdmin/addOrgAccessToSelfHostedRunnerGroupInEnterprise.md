---
name: Add organization access to a self-hosted runner group in an enterprise
example: octokit.enterpriseAdmin.addOrgAccessToSelfHostedRunnerGroupInEnterprise({ enterprise, runner_group_id, org_id })
route: PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}
scope: enterpriseAdmin
type: API method
---

# Add organization access to a self-hosted runner group in an enterprise

Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.enterpriseAdmin.addOrgAccessToSelfHostedRunnerGroupInEnterprise({
  enterprise,
  runner_group_id,
  org_id,
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
<tr><td>org_id</td><td>yes</td><td>

Unique identifier of an organization.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/enterprise-admin/actions/#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise).
