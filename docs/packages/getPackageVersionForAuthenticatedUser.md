---
name: Get a package version for the authenticated user
example: octokit.rest.packages.getPackageVersionForAuthenticatedUser({ package_type, package_name, package_version_id })
route: GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}
scope: packages
type: API method
---

# Get a package version for the authenticated user

Gets a specific package version for a package owned by the authenticated user.

To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
If `package_type` is not `container`, your token must also include the `repo` scope.

```js
octokit.rest.packages.getPackageVersionForAuthenticatedUser({
  package_type,
  package_name,
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
<tr><td>package_version_id</td><td>yes</td><td>

Unique identifier of the package version.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/packages#get-a-package-version-for-the-authenticated-user).
