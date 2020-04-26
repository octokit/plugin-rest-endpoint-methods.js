---
name: List self-hosted runners for an organization
example: octokit.actions.listSelfHostedRunnersForOrg({ org })
route: GET /orgs/{org}/actions/runners
scope: actions
type: API method
---

# List self-hosted runners for an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.

Lists all self-hosted runners for an organization. Anyone with admin access to the organization can use this endpoint. GitHub Apps must have the `self-hosted runners:read` organization permission to use this endpoint.

```js
octokit.actions.listSelfHostedRunnersForOrg({
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

org parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runners/#list-self-hosted-runners-for-an-organization).
