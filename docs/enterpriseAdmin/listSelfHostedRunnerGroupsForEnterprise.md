---
name: List self-hosted runner groups for an enterprise
example: octokit.enterpriseAdmin.listSelfHostedRunnerGroupsForEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/actions/runner-groups
scope: enterpriseAdmin
type: API method
---

# List self-hosted runner groups for an enterprise

Lists all self-hosted runner groups for an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.enterpriseAdmin.listSelfHostedRunnerGroupsForEnterprise({
  enterprise,
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/enterprise-admin/actions/#list-self-hosted-runner-groups-for-an-enterprise).
