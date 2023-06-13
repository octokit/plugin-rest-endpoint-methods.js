---
name: Remove a repository from an app installation
example: octokit.rest.apps.removeRepoFromInstallation({ installation_id, repository_id })
route: DELETE /user/installations/{installation_id}/repositories/{repository_id}
scope: apps
type: API method
---

# Remove a repository from an app installation

**Deprecated:** This method has been renamed to apps.removeRepoFromInstallationForAuthenticatedUser

Remove a single repository from an installation. The authenticated user must have admin access to the repository. The installation must have the `repository_selection` of `selected`.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

```js
octokit.rest.apps.removeRepoFromInstallation({
  installation_id,
  repository_id,
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
    <tr><td>installation_id</td><td>yes</td><td>

The unique identifier of the installation.

</td></tr>
<tr><td>repository_id</td><td>yes</td><td>

The unique identifier of the repository.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#remove-a-repository-from-an-app-installation).
