---
name: Get an environment variable
example: octokit.rest.actions.getEnvironmentVariable({ repository_id, environment_name, name })
route: GET /repositories/{repository_id}/environments/{environment_name}/variables/{name}
scope: actions
type: API method
---

# Get an environment variable

Gets a specific variable in an environment.

Authenticated users must have collaborator access to a repository to create, update, or read variables.

OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.actions.getEnvironmentVariable({
  repository_id,
  environment_name,
  name,
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
<tr><td>name</td><td>yes</td><td>

The name of the variable.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/variables#get-an-environment-variable).
