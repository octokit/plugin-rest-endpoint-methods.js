---
name: Get an environment secret
example: octokit.rest.actions.getEnvironmentSecret({ repository_id, environment_name, secret_name })
route: GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}
scope: actions
type: API method
---

# Get an environment secret

Gets a single environment secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

```js
octokit.rest.actions.getEnvironmentSecret({
  repository_id,
  environment_name,
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
    <tr><td>repository_id</td><td>yes</td><td>

The unique identifier of the repository.

</td></tr>
<tr><td>environment_name</td><td>yes</td><td>

The name of the environment.

</td></tr>
<tr><td>secret_name</td><td>yes</td><td>

The name of the secret.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#get-an-environment-secret).
