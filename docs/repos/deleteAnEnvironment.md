---
name: Delete an environment
example: octokit.rest.repos.deleteAnEnvironment({ owner, repo, environment_name })
route: DELETE /repos/{owner}/{repo}/environments/{environment_name}
scope: repos
type: API method
---

# Delete an environment

You must authenticate using an access token with the repo scope to use this endpoint.

```js
octokit.rest.repos.deleteAnEnvironment({
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>environment_name</td><td>yes</td><td>

The name of the environment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/repos#delete-an-environment).
