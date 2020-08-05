---
name: List self-hosted runners for an enterprise
example: octokit.enterpriseAdmin.listSelfHostedRunnersForEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/actions/runners
scope: enterpriseAdmin
type: API method
---

# List self-hosted runners for an enterprise

**Warning:** The self-hosted runners API for enterprise accounts is currently in public beta and subject to change.

Lists all self-hosted runners configured for an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.enterpriseAdmin.listSelfHostedRunnersForEnterprise({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/enterprise-admin/actions/#list-self-hosted-runners-for-an-enterprise).
