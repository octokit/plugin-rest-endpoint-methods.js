---
name: Get an environment
example: octokit.repos.getEnvironment({ owner, repo, environment_name })
route: GET /repos/{owner}/{repo}/environments/{environment_name}
scope: repos
type: API method
---

# Get an environment

Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

```js
octokit.repos.getEnvironment({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#get-an-environment).
