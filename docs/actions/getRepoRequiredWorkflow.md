---
name: Get a required workflow entity for a repository
example: octokit.rest.actions.getRepoRequiredWorkflow({ org, repo, required_workflow_id_for_repo })
route: GET /repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}
scope: actions
type: API method
---

# Get a required workflow entity for a repository

Gets a specific required workflow present in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."

```js
octokit.rest.actions.getRepoRequiredWorkflow({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>required_workflow_id_for_repo</td><td>yes</td><td>

The ID of the required workflow that has run at least once in a repository.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#get-repository-required-workflow).
