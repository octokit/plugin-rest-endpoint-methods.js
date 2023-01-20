---
name: Get required workflow usage
example: octokit.rest.actions.getRepoRequiredWorkflowUsage({ org, repo, required_workflow_id_for_repo })
route: GET /repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/timing
scope: actions
type: API method
---

# Get required workflow usage

Gets the number of billable minutes used by a specific required workflow during the current billing cycle.

Billable minutes only apply to required workflows running in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)."

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

```js
octokit.rest.actions.getRepoRequiredWorkflowUsage({
  org,
  repo,
  required_workflow_id_for_repo,
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
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>required_workflow_id_for_repo</td><td>yes</td><td>

The ID of the required workflow that has run at least once in a repository.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#get-repository-required-workflow-usage).
