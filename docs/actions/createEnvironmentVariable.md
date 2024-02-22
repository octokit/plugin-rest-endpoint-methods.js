---
name: Create an environment variable
example: octokit.rest.actions.createEnvironmentVariable({ repository_id, environment_name, name, value })
route: POST /repositories/{repository_id}/environments/{environment_name}/variables
scope: actions
type: API method
---

# Create an environment variable

Create an environment variable that you can reference in a GitHub Actions workflow.

Authenticated users must have collaborator access to a repository to create, update, or read variables.

OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.actions.createEnvironmentVariable({
  repository_id,
  environment_name,
  name,
  value,
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
<tr><td>value</td><td>yes</td><td>

The value of the variable.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/variables#create-an-environment-variable).
