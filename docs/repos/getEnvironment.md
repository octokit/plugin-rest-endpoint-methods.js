---
name: Get an environment
example: octokit.rest.repos.getEnvironment({ owner, repo, environment_name })
route: GET /repos/{owner}/{repo}/environments/{environment_name}
scope: repos
type: API method
---

# Get an environment

**Note:** To get information about name patterns that branches must match in order to deploy to this environment, see "[Get a deployment branch policy](/rest/deployments/branch-policies#get-a-deployment-branch-policy)."

Anyone with read access to the repository can use this endpoint. If the
repository is private, you must use an access token with the `repo` scope. GitHub
Apps must have the `actions:read` permission to use this endpoint.

```js
octokit.rest.repos.getEnvironment({
  owner,
  repo,
  environment_name,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/deployments/environments#get-an-environment).
