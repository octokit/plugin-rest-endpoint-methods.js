---
name: List labels for a self-hosted runner for an enterprise
example: octokit.rest.enterpriseAdmin.listLabelsForSelfHostedRunnerForEnterprise({ enterprise, runner_id })
route: GET /enterprises/{enterprise}/actions/runners/{runner_id}/labels
scope: enterpriseAdmin
type: API method
---

# List labels for a self-hosted runner for an enterprise

Lists all labels for a self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

```js
octokit.rest.enterpriseAdmin.listLabelsForSelfHostedRunnerForEnterprise({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-enterprise).
