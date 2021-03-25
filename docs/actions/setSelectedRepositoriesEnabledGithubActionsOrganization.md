---
name: Set selected repositories enabled for GitHub Actions in an organization
example: octokit.rest.actions.setSelectedRepositoriesEnabledGithubActionsOrganization({ org, selected_repository_ids })
route: PUT /orgs/{org}/actions/permissions/repositories
scope: actions
type: API method
---

# Set selected repositories enabled for GitHub Actions in an organization

Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

```js
octokit.rest.actions.setSelectedRepositoriesEnabledGithubActionsOrganization({
  org,
  selected_repository_ids,
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
<tr><td>selected_repository_ids</td><td>yes</td><td>

List of repository IDs to enable for GitHub Actions.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization).
