---
name: Set GitHub Actions cache storage limit for an organization
example: octokit.rest.actions.setActionsCacheStorageLimitForOrganization({ org })
route: PUT /organizations/{org}/actions/cache/storage-limit
scope: actions
type: API method
---

# Set GitHub Actions cache storage limit for an organization

Sets GitHub Actions cache storage limit for an organization. All organizations and repositories under this
organization may not set a higher cache storage limit.

OAuth tokens and personal access tokens (classic) need the `admin:organization` scope to use this endpoint.

```js
octokit.rest.actions.setActionsCacheStorageLimitForOrganization({
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
<tr><td>max_cache_size_gb</td><td>no</td><td>

For repositories in the organization, the maximum size limit for the sum of all caches in a repository, in gigabytes.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/cache#set-github-actions-cache-storage-limit-for-an-organization).
