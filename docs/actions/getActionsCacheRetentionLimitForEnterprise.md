---
name: Get GitHub Actions cache retention limit for an enterprise
example: octokit.rest.actions.getActionsCacheRetentionLimitForEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/actions/cache/retention-limit
scope: actions
type: API method
---

# Get GitHub Actions cache retention limit for an enterprise

Gets GitHub Actions cache retention limit for an enterprise. All organizations and repositories under this
enterprise may not set a higher cache retention limit.

OAuth tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```js
octokit.rest.actions.getActionsCacheRetentionLimitForEnterprise({
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

The slug version of the enterprise name.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/cache#get-github-actions-cache-retention-limit-for-an-enterprise).
