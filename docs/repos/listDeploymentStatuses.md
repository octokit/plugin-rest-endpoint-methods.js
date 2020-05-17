---
name: List deployment statuses
example: octokit.repos.listDeploymentStatuses({ owner, repo, deployment_id })
route: GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses
scope: repos
type: API method
---

# List deployment statuses

Users with pull access can view deployment statuses for a deployment:

```js
octokit.repos.listDeploymentStatuses({
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

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/deployments/#list-deployment-statuses).
