---
name: Create an environment
example: octokit.repos.createAnEnvironment({ owner, repo, environment_name })
route: POST /repos/{owner}/{repo}/environments/{environment_name}
scope: repos
type: API method
---

# Create an environment

Create an environment for a repository. If an environment with the specified name already exists, the existing environment will be returned.

The created environment will not have any protection rules configured. To configure protection rules for the created environment, see "[Set protection rules for an environment](#set-protection-rules-for-an-environment)".

You must authenticate using an access token with the repo scope to use this endpoint.

```js
octokit.repos.createAnEnvironment({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>environment_name</td><td>yes</td><td>

The name of the environment

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#create-an-environment).
