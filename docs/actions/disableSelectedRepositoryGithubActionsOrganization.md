---
name: Disable a selected repository for GitHub Actions in an organization
example: octokit.actions.disableSelectedRepositoryGithubActionsOrganization({ org, repository_id })
route: DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}
scope: actions
type: API method
---

# Disable a selected repository for GitHub Actions in an organization

Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

```js
octokit.actions.disableSelectedRepositoryGithubActionsOrganization({
  org,
  repository_id
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
<tr><td>repository_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization).
