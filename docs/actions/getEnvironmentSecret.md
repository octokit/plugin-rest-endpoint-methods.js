---
name: Get an environment secret
example: octokit.rest.actions.getEnvironmentSecret({ repository_id, environment_name, secret_name })
route: GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}
scope: actions
type: API method
---

# Get an environment secret

Gets a single environment secret without revealing its encrypted value.

Authenticated users must have collaborator access to a repository to create, update, or read secrets.

OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

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

The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.

</td></tr>
<tr><td>secret_name</td><td>yes</td><td>

The name of the secret.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/secrets#get-an-environment-secret).
