---
name: Create a deployment branch policy
example: octokit.rest.repos.createDeploymentBranchPolicy({ owner, repo, environment_name, name })
route: POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies
scope: repos
type: API method
---

# Create a deployment branch policy

Creates a deployment branch or tag policy for an environment.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.repos.createDeploymentBranchPolicy({
  owner,
  repo,
  environment_name,
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

The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.

</td></tr>
<tr><td>name</td><td>yes</td><td>

The name pattern that branches or tags must match in order to deploy to the environment.

Wildcard characters will not match `/`. For example, to match branches that begin with `release/` and contain an additional single slash, use `release/*/*`.
For more information about pattern matching syntax, see the [Ruby File.fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

</td></tr>
<tr><td>type</td><td>no</td><td>

Whether this rule targets a branch or tag

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/deployments/branch-policies#create-a-deployment-branch-policy).
