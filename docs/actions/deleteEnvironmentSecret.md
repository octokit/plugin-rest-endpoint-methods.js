---
name: Delete an environment secret
example: octokit.rest.actions.deleteEnvironmentSecret({ repository_id, environment_name, secret_name })
route: DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}
scope: actions
type: API method
---

# Delete an environment secret

Deletes a secret in an environment using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

```js
octokit.rest.actions.deleteEnvironmentSecret({
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

</td></tr>
<tr><td>environment_name</td><td>yes</td><td>

The name of the environment

</td></tr>
<tr><td>secret_name</td><td>yes</td><td>

secret_name parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#delete-an-environment-secret).
