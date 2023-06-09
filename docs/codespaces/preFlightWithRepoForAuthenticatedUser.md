---
name: Get default attributes for a codespace
example: octokit.rest.codespaces.preFlightWithRepoForAuthenticatedUser({ owner, repo })
route: GET /repos/{owner}/{repo}/codespaces/new
scope: codespaces
type: API method
---

# Get default attributes for a codespace

Gets the default attributes for codespaces created by the user with the repository.

You must authenticate using an access token with the `codespace` scope to use this endpoint.

GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.

```js
octokit.rest.codespaces.preFlightWithRepoForAuthenticatedUser({
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

The branch or commit to check for a default devcontainer path. If not specified, the default branch will be checked.

</td></tr>
<tr><td>client_ip</td><td>no</td><td>

An alternative IP for default location auto-detection, such as when proxying a request.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codespaces#preview-attributes-for-a-new-codespace).
