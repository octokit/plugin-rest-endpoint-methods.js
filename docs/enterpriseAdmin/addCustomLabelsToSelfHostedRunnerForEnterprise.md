---
name: Add custom labels to a self-hosted runner for an enterprise
example: octokit.rest.enterpriseAdmin.addCustomLabelsToSelfHostedRunnerForEnterprise({ enterprise, runner_id, labels })
route: POST /enterprises/{enterprise}/actions/runners/{runner_id}/labels
scope: enterpriseAdmin
type: API method
---

# Add custom labels to a self-hosted runner for an enterprise

Add custom labels to a self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

```js
octokit.rest.enterpriseAdmin.addCustomLabelsToSelfHostedRunnerForEnterprise({
  enterprise,
  runner_id,
  labels,
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
<tr><td>labels</td><td>yes</td><td>

The names of the custom labels to add to the runner.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-enterprise).
