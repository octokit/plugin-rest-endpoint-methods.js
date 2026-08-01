---
name: Set GitHub Actions cache retention limit for an organization
example: octokit.rest.actions.setActionsCacheRetentionLimitForOrganization({ org })
route: PUT /organizations/{org}/actions/cache/retention-limit
scope: actions
type: API method
---

# Set GitHub Actions cache retention limit for an organization

Sets GitHub Actions cache retention limit for an organization. All repositories under this
organization may not set a higher cache retention limit.

OAuth tokens and personal access tokens (classic) need the `admin:organization` scope to use this endpoint.

```js
octokit.rest.actions.setActionsCacheRetentionLimitForOrganization({
  org,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>max_cache_retention_days</td><td>no</td><td>

For repositories in this organization, the maximum duration, in days, for which caches in a repository may be retained.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/cache#set-github-actions-cache-retention-limit-for-an-organization).
