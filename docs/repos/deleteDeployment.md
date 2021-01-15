---
name: Delete a deployment
example: octokit.repos.deleteDeployment({ owner, repo, deployment_id })
route: DELETE /repos/{owner}/{repo}/deployments/{deployment_id}
scope: repos
type: API method
---

# Delete a deployment

To ensure there can always be an active deployment, you can only delete an _inactive_ deployment. Anyone with `repo` or `repo_deployment` scopes can delete an inactive deployment.

To set a deployment as inactive, you must:

- Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
- Mark the active deployment as inactive by adding any non-successful deployment status.

For more information, see "[Create a deployment](https://docs.github.com/rest/reference/repos/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/rest/reference/repos#create-a-deployment-status)."

```js
octokit.repos.deleteDeployment({
  owner,
  repo,
  deployment_id,
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>deployment_id</td><td>yes</td><td>

deployment_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#delete-a-deployment).
