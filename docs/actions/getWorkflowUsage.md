---
name: Get workflow usage
example: octokit.rest.actions.getWorkflowUsage({ owner, repo, workflow_id })
route: GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing
scope: actions
type: API method
---

# Get workflow usage

> [!WARNING]  
> This endpoint is in the process of closing down. Refer to "[Actions Get workflow usage and Get workflow run usage endpoints closing down](https://github.blog/changelog/2025-02-02-actions-get-workflow-usage-and-get-workflow-run-usage-endpoints-closing-down/)" for more information.

Gets the number of billable minutes used by a specific workflow during the current billing cycle. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

Anyone with read access to the repository can use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```js
octokit.rest.actions.getWorkflowUsage({
  owner,
  repo,
  workflow_id,
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
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>workflow_id</td><td>yes</td><td>

The ID of the workflow. You can also pass the workflow file name as a string.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/workflows#get-workflow-usage).
