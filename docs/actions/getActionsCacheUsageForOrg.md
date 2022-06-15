---
name: Get GitHub Actions cache usage for an organization
example: octokit.rest.actions.getActionsCacheUsageForOrg({ org })
route: GET /orgs/{org}/actions/cache/usage
scope: actions
type: API method
---

# Get GitHub Actions cache usage for an organization

Gets the total GitHub Actions cache usage for an organization.
The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.

```js
octokit.rest.actions.getActionsCacheUsageForOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#get-github-actions-cache-usage-for-an-organization).
