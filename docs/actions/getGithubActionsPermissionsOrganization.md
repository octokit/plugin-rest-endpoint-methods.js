---
name: Get GitHub Actions permissions for an organization
example: octokit.actions.getGithubActionsPermissionsOrganization({ org })
route: GET /orgs/{org}/actions/permissions
scope: actions
type: API method
---

# Get GitHub Actions permissions for an organization

Gets the GitHub Actions permissions policy for repositories and allowed actions in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

```js
octokit.actions.getGithubActionsPermissionsOrganization({
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

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-an-organization).
