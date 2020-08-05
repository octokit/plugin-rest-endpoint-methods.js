---
name: Set self-hosted runners in a group for an enterprise
example: octokit.enterpriseAdmin.setSelfHostedInGroupForEnterprise({ enterprise, runner_group_id, runners })
route: PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners
scope: enterpriseAdmin
type: API method
---

# Set self-hosted runners in a group for an enterprise

**Warning:** The self-hosted runners API for enterprise accounts is currently in public beta and subject to change.

Replaces the list of self-hosted runners that that are part of an enterprise runner group.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.enterpriseAdmin.setSelfHostedInGroupForEnterprise({
  enterprise,
  runner_group_id,
  runners,
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
<tr><td>runners</td><td>yes</td><td>

List of runner IDs to add to the runner group.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/enterprise-admin/actions/#set-self-hosted-runners-in-a-group-for-an-enterprise).
