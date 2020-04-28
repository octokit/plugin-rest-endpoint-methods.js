---
name: Get a single deployment status
example: octokit.repos.getDeploymentStatus({ owner, repo, deployment_id, status_id })
route: GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}
scope: repos
type: API method
---

# Get a single deployment status

Users with pull access can view a deployment status for a deployment:

```js
octokit.repos.getDeploymentStatus({
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>deployment_id</td><td>yes</td><td>

deployment_id parameter

</td></tr>
<tr><td>status_id</td><td>yes</td><td>

status_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/deployments/#get-a-single-deployment-status).
