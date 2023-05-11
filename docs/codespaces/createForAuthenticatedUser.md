---
name: Create a codespace for the authenticated user
example: octokit.rest.codespaces.createForAuthenticatedUser({ repository_id, pull_request, pull_request.pull_request_number, pull_request.repository_id })
route: POST /user/codespaces
scope: codespaces
type: API method
---

# Create a codespace for the authenticated user

Creates a new codespace, owned by the authenticated user.

This endpoint requires either a `repository_id` OR a `pull_request` but not both.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.

```js
octokit.rest.codespaces.createForAuthenticatedUser({
        repository_id,
pull_request,
pull_request.pull_request_number,
pull_request.repository_id
      })
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

Repository id for this codespace

</td></tr>
<tr><td>ref</td><td>no</td><td>

Git ref (typically a branch name) for this codespace

</td></tr>
<tr><td>location</td><td>no</td><td>

The requested location for a new codespace. Best efforts are made to respect this upon creation. Assigned by IP if not provided.

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
<tr><td>pull_request</td><td>yes</td><td>

Pull request number for this codespace

</td></tr>
<tr><td>pull_request.pull_request_number</td><td>yes</td><td>

Pull request number

</td></tr>
<tr><td>pull_request.repository_id</td><td>yes</td><td>

Repository id for this codespace

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codespaces#create-a-codespace-for-the-authenticated-user).
