---
name: Get GitHub Actions permissions for an organization
example: octokit.rest.actions.getGithubActionsPermissionsOrganization({ org })
route: GET /orgs/{org}/actions/permissions
scope: actions
type: API method
---

# Get GitHub Actions permissions for an organization

Gets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization.

OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.actions.getGithubActionsPermissionsOrganization({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/permissions#get-github-actions-permissions-for-an-organization).
