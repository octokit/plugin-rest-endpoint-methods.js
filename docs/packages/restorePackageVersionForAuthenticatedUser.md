---
name: Restore a package version for the authenticated user
example: octokit.rest.packages.restorePackageVersionForAuthenticatedUser({ package_type, package_name, package_version_id })
route: POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore
scope: packages
type: API method
---

# Restore a package version for the authenticated user

Restores a package version owned by the authenticated user.

You can restore a deleted package version under the following conditions:

- The package was deleted within the last 30 days.
- The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.

To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:write` scope. If `package_type` is not `container`, your token must also include the `repo` scope.

```js
octokit.rest.packages.restorePackageVersionForAuthenticatedUser({
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

The type of supported package. Can be one of `npm`, `maven`, `rubygems`, `nuget`, `docker`, or `container`. For Docker images that use the package namespace `https://ghcr.io/owner/package-name`, use `container`.

</td></tr>
<tr><td>package_name</td><td>yes</td><td>

The name of the package.

</td></tr>
<tr><td>package_version_id</td><td>yes</td><td>

Unique identifier of the package version.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/packages#restore-a-package-version-for-the-authenticated-user).
