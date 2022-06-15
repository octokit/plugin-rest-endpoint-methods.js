---
name: Get default workflow permissions for an enterprise
example: octokit.rest.actions.getGithubActionsDefaultWorkflowPermissionsEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/actions/permissions/workflow
scope: actions
type: API method
---

# Get default workflow permissions for an enterprise

Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an enterprise,
as well as whether GitHub Actions can submit approving pull request reviews. For more information, see
"[Enforcing a policy for workflow permissions in your enterprise](https://docs.github.com/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)."

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
GitHub Apps must have the `enterprise_administration:write` permission to use this endpoint.

```js
octokit.rest.actions.getGithubActionsDefaultWorkflowPermissionsEnterprise({
  enterprise,
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
    <tr><td>enterprise</td><td>yes</td><td>

The slug version of the enterprise name. You can also substitute this value with the enterprise id.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#get-default-workflow-permissions-for-an-enterprise).
