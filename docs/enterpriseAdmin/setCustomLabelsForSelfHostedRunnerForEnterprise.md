---
name: Set custom labels for a self-hosted runner for an enterprise
example: octokit.rest.enterpriseAdmin.setCustomLabelsForSelfHostedRunnerForEnterprise({ enterprise, runner_id, labels })
route: PUT /enterprises/{enterprise}/actions/runners/{runner_id}/labels
scope: enterpriseAdmin
type: API method
---

# Set custom labels for a self-hosted runner for an enterprise

Remove all previous custom labels and set the new custom labels for a specific
self-hosted runner configured in an enterprise.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

```js
octokit.rest.enterpriseAdmin.setCustomLabelsForSelfHostedRunnerForEnterprise({
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

The names of the custom labels to set for the runner. You can pass an empty array to remove all custom labels.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-enterprise).
