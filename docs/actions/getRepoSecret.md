---
name: Get a repository secret
example: octokit.actions.getRepoSecret({ owner, repo, secret_name })
route: GET /repos/{owner}/{repo}/actions/secrets/{secret_name}
scope: actions
type: API method
---

# Get a repository secret

Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

```js
octokit.actions.getRepoSecret({
  owner,
  repo,
  secret_name
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
<tr><td>secret_name</td><td>yes</td><td>

secret_name parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#get-a-repository-secret).
