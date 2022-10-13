---
name: Remove a custom label from a self-hosted runner for an enterprise
example: octokit.rest.enterpriseAdmin.removeCustomLabelFromSelfHostedRunnerForEnterprise({ enterprise, runner_id, name })
route: DELETE /enterprises/{enterprise}/actions/runners/{runner_id}/labels/{name}
scope: enterpriseAdmin
type: API method
---

# Remove a custom label from a self-hosted runner for an enterprise

Remove a custom label from a self-hosted runner configured
in an enterprise. Returns the remaining labels from the runner.

This endpoint returns a `404 Not Found` status if the custom label is not
present on the runner.

You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.

```js
octokit.rest.enterpriseAdmin.removeCustomLabelFromSelfHostedRunnerForEnterprise(
  {
    enterprise,
    runner_id,
    name,
  }
);
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
<tr><td>name</td><td>yes</td><td>

The name of a self-hosted runner's custom label.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-enterprise).
