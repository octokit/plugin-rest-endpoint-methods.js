---
name: List devcontainer configurations in a repository for the authenticated user
example: octokit.rest.codespaces.listDevcontainersInRepositoryForAuthenticatedUser({ owner, repo })
route: GET /repos/{owner}/{repo}/codespaces/devcontainers
scope: codespaces
type: API method
---

# List devcontainer configurations in a repository for the authenticated user

Lists the devcontainer.json files associated with a specified repository and the authenticated user. These files
specify launchpoint configurations for codespaces created within the repository.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have read access to the `codespaces_metadata` repository permission to use this endpoint.

```js
octokit.rest.codespaces.listDevcontainersInRepositoryForAuthenticatedUser({
  owner,
  repo,
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
    <tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codespaces#list-devcontainers-in-a-repository-for-the-authenticated-user).
