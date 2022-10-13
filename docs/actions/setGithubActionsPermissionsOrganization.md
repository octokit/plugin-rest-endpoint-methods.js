---
name: Set GitHub Actions permissions for an organization
example: octokit.rest.actions.setGithubActionsPermissionsOrganization({ org, enabled_repositories })
route: PUT /orgs/{org}/actions/permissions
scope: actions
type: API method
---

# Set GitHub Actions permissions for an organization

Sets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization.

If the organization belongs to an enterprise that has set restrictive permissions at the enterprise level, such as `allowed_actions` to `selected` actions and reusable workflows, then you cannot override them for the organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

```js
octokit.rest.actions.setGithubActionsPermissionsOrganization({
  org,
  enabled_repositories,
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
<tr><td>enabled_repositories</td><td>yes</td><td>

The policy that controls the repositories in the organization that are allowed to run GitHub Actions.

</td></tr>
<tr><td>allowed_actions</td><td>no</td><td>

The permissions policy that controls the actions and reusable workflows that are allowed to run.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-organization).
