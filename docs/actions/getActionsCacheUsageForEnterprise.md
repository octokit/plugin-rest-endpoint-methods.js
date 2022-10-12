---
name: Get GitHub Actions cache usage for an enterprise
example: octokit.rest.actions.getActionsCacheUsageForEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/actions/cache/usage
scope: actions
type: API method
---

# Get GitHub Actions cache usage for an enterprise

Gets the total GitHub Actions cache usage for an enterprise.
The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

```js
octokit.rest.actions.getActionsCacheUsageForEnterprise({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#get-github-actions-cache-usage-for-an-enterprise).
