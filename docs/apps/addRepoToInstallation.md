---
name: Add a repository to an app installation
example: octokit.rest.apps.addRepoToInstallation({ installation_id, repository_id })
route: PUT /user/installations/{installation_id}/repositories/{repository_id}
scope: apps
type: API method
---

# Add a repository to an app installation

**Deprecated:** This method has been renamed to apps.addRepoToInstallationForAuthenticatedUser

Add a single repository to an installation. The authenticated user must have admin access to the repository.

This endpoint only works for PATs (classic) with the `repo` scope.

```js
octokit.rest.apps.addRepoToInstallation({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/apps/installations#add-a-repository-to-an-app-installation).
