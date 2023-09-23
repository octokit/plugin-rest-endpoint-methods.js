---
name: List environment variables
example: octokit.rest.actions.listEnvironmentVariables({ repository_id, environment_name })
route: GET /repositories/{repository_id}/environments/{environment_name}/variables
scope: actions
type: API method
---

# List environment variables

Lists all environment variables.

You must authenticate using an access token with the `repo` scope to use this endpoint.
If the repository is private, you must use an access token with the `repo` scope.
GitHub Apps must have the `environments:read` repository permission to use this endpoint.
Authenticated users must have collaborator access to a repository to create, update, or read variables.

```js
octokit.rest.actions.listEnvironmentVariables({
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
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 30).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/variables#list-environment-variables).
