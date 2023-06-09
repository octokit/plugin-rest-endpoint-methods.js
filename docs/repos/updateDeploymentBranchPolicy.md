---
name: Update a deployment branch policy
example: octokit.rest.repos.updateDeploymentBranchPolicy({ owner, repo, environment_name, branch_policy_id, name })
route: PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}
scope: repos
type: API method
---

# Update a deployment branch policy

Updates a deployment branch policy for an environment.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.

```js
octokit.rest.repos.updateDeploymentBranchPolicy({
  owner,
  repo,
  environment_name,
  branch_policy_id,
  name,
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
<tr><td>name</td><td>yes</td><td>

The name pattern that branches must match in order to deploy to the environment.

Wildcard characters will not match `/`. For example, to match branches that begin with `release/` and contain an additional single slash, use `release/*/*`.
For more information about pattern matching syntax, see the [Ruby File.fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/deployments/branch-policies#update-deployment-branch-policy).
