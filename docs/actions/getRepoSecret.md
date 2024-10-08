---
name: Get a repository secret
example: octokit.rest.actions.getRepoSecret({ owner, repo, secret_name })
route: GET /repos/{owner}/{repo}/actions/secrets/{secret_name}
scope: actions
type: API method
---

# Get a repository secret

Gets a single repository secret without revealing its encrypted value.

The authenticated user must have collaborator access to the repository to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.actions.getRepoSecret({
  owner,
  repo,
  secret_name,
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
<tr><td>secret_name</td><td>yes</td><td>

The name of the secret.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/secrets#get-a-repository-secret).
