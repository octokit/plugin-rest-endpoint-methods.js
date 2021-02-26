---
name: Delete an environment
example: octokit.repos.deleteAnEnvironment({ owner, repo, environment_name })
route: DELETE /repos/{owner}/{repo}/environments/{environment_name}
scope: repos
type: API method
---

# Delete an environment

You must authenticate using an access token with the repo scope to use this endpoint.

```js
octokit.repos.deleteAnEnvironment({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#delete-an-environment).
