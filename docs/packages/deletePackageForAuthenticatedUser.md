---
name: Delete a package for the authenticated user
example: octokit.rest.packages.deletePackageForAuthenticatedUser({ package_type, package_name })
route: DELETE /user/packages/{package_type}/{package_name}
scope: packages
type: API method
---

# Delete a package for the authenticated user

Deletes a package owned by the authenticated user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.

To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:delete` scope.
If `package_type` is not `container`, your token must also include the `repo` scope.

```js
octokit.rest.packages.deletePackageForAuthenticatedUser({
  package_type,
  package_name,
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

The type of supported package. Can be one of `npm`, `maven`, `rubygems`, `nuget`, `docker`, or `container`. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.

</td></tr>
<tr><td>package_name</td><td>yes</td><td>

The name of the package.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/packages#delete-a-package-for-the-authenticated-user).