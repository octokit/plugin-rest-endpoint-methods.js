---
name: Get an environment public key
example: octokit.rest.actions.getEnvironmentPublicKey({ repository_id, environment_name })
route: GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key
scope: actions
type: API method
---

# Get an environment public key

Get the public key for an environment, which you need to encrypt environment
secrets. You need to encrypt a secret before you can create or update secrets.

Anyone with read access to the repository can use this endpoint.
If the repository is private you must use an access token with the `repo` scope.
GitHub Apps must have the `secrets` repository permission to use this endpoint.
Authenticated users must have collaborator access to a repository to create, update, or read secrets.

```js
octokit.rest.actions.getEnvironmentPublicKey({
  repository_id,
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
    <tr><td>repository_id</td><td>yes</td><td>

The unique identifier of the repository.

</td></tr>
<tr><td>environment_name</td><td>yes</td><td>

The name of the environment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/secrets#get-an-environment-public-key).
