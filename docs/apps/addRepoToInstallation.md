---
name: Add repository to installation
example: octokit.apps.addRepoToInstallation({ installation_id, repository_id })
route: PUT /user/installations/{installation_id}/repositories/{repository_id}
scope: apps
type: API method
---

# Add repository to installation

Add a single repository to an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization)) or [Basic Authentication](https://developer.github.com/v3/auth/#basic-authentication) to access this endpoint.

```js
octokit.apps.addRepoToInstallation({
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

</td></tr>
<tr><td>repository_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/apps/installations/#add-repository-to-installation).
