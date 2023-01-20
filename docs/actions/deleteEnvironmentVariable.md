---
name: Delete an environment variable
example: octokit.rest.actions.deleteEnvironmentVariable({ repository_id, name })
route: DELETE /repositories/{repository_id}/environments/{environment_name}/variables/{name}
scope: actions
type: API method
---

# Delete an environment variable

Deletes an environment variable using the variable name.
You must authenticate using an access token with the `repo` scope to use this endpoint.
GitHub Apps must have the `environment:write` repository permission to use this endpoint.

```js
octokit.rest.actions.deleteEnvironmentVariable({
  repository_id,
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
<tr><td>name</td><td>yes</td><td>

The name of the variable.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/variables#delete-an-environment-variable).
