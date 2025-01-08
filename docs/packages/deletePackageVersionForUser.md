---
name: Delete package version for a user
example: octokit.rest.packages.deletePackageVersionForUser({ package_type, package_name, username, package_version_id })
route: DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}
scope: packages
type: API method
---

# Delete package version for a user

Deletes a specific package version for a user. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.

If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```js
octokit.rest.packages.deletePackageVersionForUser({
  package_type,
  package_name,
  username,
  package_version_id,
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
    <tr><td>package_type</td><td>yes</td><td>

The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.

</td></tr>
<tr><td>package_name</td><td>yes</td><td>

The name of the package.

</td></tr>
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
<tr><td>package_version_id</td><td>yes</td><td>

Unique identifier of the package version.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/packages/packages#delete-package-version-for-a-user).
