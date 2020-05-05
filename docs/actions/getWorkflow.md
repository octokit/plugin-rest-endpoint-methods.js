---
name: Get a workflow
example: octokit.actions.getWorkflow({ owner, repo, workflow_id })
route: GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}
scope: actions
type: API method
---

# Get a workflow

Gets a specific workflow. You can also replace `:workflow_id` with `:workflow_file_name`. For example, you could use `main.yml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions` permission to use this endpoint.

```js
octokit.actions.getWorkflow({
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>workflow_id</td><td>yes</td><td>

workflow_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/workflows/#get-a-workflow).
