---
name: Set default workflow permissions for an organization
example: octokit.rest.actions.setGithubActionsDefaultWorkflowPermissionsOrganization({ org })
route: PUT /orgs/{org}/actions/permissions/workflow
scope: actions
type: API method
---

# Set default workflow permissions for an organization

Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization, and sets if GitHub Actions
can submit approving pull request reviews. For more information, see
"[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

```js
octokit.rest.actions.setGithubActionsDefaultWorkflowPermissionsOrganization({
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
<tr><td>default_workflow_permissions</td><td>no</td><td>

The default workflow permissions granted to the GITHUB_TOKEN when running workflows.

</td></tr>
<tr><td>can_approve_pull_request_reviews</td><td>no</td><td>

Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/permissions#set-default-workflow-permissions-for-an-organization).
