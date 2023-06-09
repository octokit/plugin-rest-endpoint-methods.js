---
name: Get a deployment branch policy
example: octokit.rest.repos.getDeploymentBranchPolicy({ owner, repo, environment_name, branch_policy_id })
route: GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}
scope: repos
type: API method
---

# Get a deployment branch policy

Gets a deployment branch policy for an environment.

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

```js
octokit.rest.repos.getDeploymentBranchPolicy({
  owner,
  repo,
  environment_name,
  branch_policy_id,
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
<tr><td>environment_name</td><td>yes</td><td>

The name of the environment.

</td></tr>
<tr><td>branch_policy_id</td><td>yes</td><td>

The unique identifier of the branch policy.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/deployments/branch-policies#get-deployment-branch-policy).
