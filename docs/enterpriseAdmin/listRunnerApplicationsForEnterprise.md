---
name: List runner applications for an enterprise
example: octokit.enterpriseAdmin.listRunnerApplicationsForEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/actions/runners/downloads
scope: enterpriseAdmin
type: API method
---

# List runner applications for an enterprise

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.enterpriseAdmin.listRunnerApplicationsForEnterprise({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/enterprise-admin/actions/#list-runner-applications-for-an-enterprise).
