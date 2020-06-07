---
name: Get a deployment
example: octokit.repos.getDeployment({ owner, repo, deployment_id })
route: GET /repos/{owner}/{repo}/deployments/{deployment_id}
scope: repos
type: API method
---

# Get a deployment

```js
octokit.repos.getDeployment({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/deployments/#get-a-deployment).
