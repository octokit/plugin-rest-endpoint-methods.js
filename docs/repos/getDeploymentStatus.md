---
name: Get a deployment status
example: octokit.rest.repos.getDeploymentStatus({ owner, repo, deployment_id, status_id })
route: GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}
scope: repos
type: API method
---

# Get a deployment status

Users with pull access can view a deployment status for a deployment:

```js
octokit.rest.repos.getDeploymentStatus({
  owner,
  repo,
  deployment_id,
  status_id,
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>deployment_id</td><td>yes</td><td>

deployment_id parameter

</td></tr>
<tr><td>status_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/deployments/statuses#get-a-deployment-status).
