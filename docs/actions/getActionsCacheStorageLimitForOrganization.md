---
name: Get GitHub Actions cache storage limit for an organization
example: octokit.rest.actions.getActionsCacheStorageLimitForOrganization({ org })
route: GET /organizations/{org}/actions/cache/storage-limit
scope: actions
type: API method
---

# Get GitHub Actions cache storage limit for an organization

Gets GitHub Actions cache storage limit for an organization. All repositories under this
organization may not set a higher cache storage limit.

OAuth tokens and personal access tokens (classic) need the `admin:organization` scope to use this endpoint.

```js
octokit.rest.actions.getActionsCacheStorageLimitForOrganization({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/cache#get-github-actions-cache-storage-limit-for-an-organization).
