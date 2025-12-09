---
name: Set GitHub Actions cache retention limit for an enterprise
example: octokit.rest.actions.setActionsCacheRetentionLimitForEnterprise({ enterprise })
route: PUT /enterprises/{enterprise}/actions/cache/retention-limit
scope: actions
type: API method
---

# Set GitHub Actions cache retention limit for an enterprise

Sets GitHub Actions cache retention limit for an enterprise. All organizations and repositories under this
enterprise may not set a higher cache retention limit.

OAuth tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```js
octokit.rest.actions.setActionsCacheRetentionLimitForEnterprise({
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
<tr><td>max_cache_retention_days</td><td>no</td><td>

For repositories & organizations in an enterprise, the maximum duration, in days, for which caches in a repository may be retained.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/cache#set-github-actions-cache-retention-limit-for-an-enterprise).
