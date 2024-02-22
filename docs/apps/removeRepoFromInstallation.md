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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/apps/installations#remove-a-repository-from-an-app-installation).
