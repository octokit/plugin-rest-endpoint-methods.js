---
name: Create a codespace in a repository
example: octokit.rest.codespaces.createWithRepoForAuthenticatedUser({ owner, repo })
route: POST /repos/{owner}/{repo}/codespaces
scope: codespaces
type: API method
---

# Create a codespace in a repository

Creates a codespace owned by the authenticated user in the specified repository.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.

```js
octokit.rest.codespaces.createWithRepoForAuthenticatedUser({
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
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>ref</td><td>no</td><td>

Git ref (typically a branch name) for this codespace

</td></tr>
<tr><td>location</td><td>no</td><td>

The requested location for a new codespace. Best efforts are made to respect this upon creation. Assigned by IP if not provided.

</td></tr>
<tr><td>geo</td><td>no</td><td>

The geographic area for this codespace. If not specified, the value is assigned by IP. This property replaces `location`, which is being deprecated.

</td></tr>
<tr><td>client_ip</td><td>no</td><td>

IP for location auto-detection when proxying a request

</td></tr>
<tr><td>machine</td><td>no</td><td>

Machine type to use for this codespace

</td></tr>
<tr><td>devcontainer_path</td><td>no</td><td>

Path to devcontainer.json config to use for this codespace

</td></tr>
<tr><td>multi_repo_permissions_opt_out</td><td>no</td><td>

Whether to authorize requested permissions from devcontainer.json

</td></tr>
<tr><td>working_directory</td><td>no</td><td>

Working directory for this codespace

</td></tr>
<tr><td>idle_timeout_minutes</td><td>no</td><td>

Time in minutes before codespace stops from inactivity

</td></tr>
<tr><td>display_name</td><td>no</td><td>

Display name for this codespace

</td></tr>
<tr><td>retention_period_minutes</td><td>no</td><td>

Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codespaces#create-a-codespace-in-a-repository).
