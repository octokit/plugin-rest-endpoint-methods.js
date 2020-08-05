---
name: Create a self-hosted runner group for an enterprise
example: octokit.enterpriseAdmin.createSelfHostedRunnerGroupForEnterprise({ enterprise, name })
route: POST /enterprises/{enterprise}/actions/runner-groups
scope: enterpriseAdmin
type: API method
---

# Create a self-hosted runner group for an enterprise

**Warning:** The self-hosted runners API for enterprise accounts is currently in public beta and subject to change.

Creates a new self-hosted runner group for an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.enterpriseAdmin.createSelfHostedRunnerGroupForEnterprise({
  enterprise,
  name,
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
<tr><td>name</td><td>yes</td><td>

Name of the runner group.

</td></tr>
<tr><td>visibility</td><td>no</td><td>

Visibility of a runner group. You can select all organizations or select individual organization. Can be one of: `all` or `selected`

</td></tr>
<tr><td>selected_organization_ids</td><td>no</td><td>

List of organization IDs that can access the runner group.

</td></tr>
<tr><td>runners</td><td>no</td><td>

List of runner IDs to add to the runner group.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/enterprise-admin/actions/#create-self-hosted-runner-group-for-an-enterprise).
