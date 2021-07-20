---
name: Get all package versions for a package owned by an organization
example: octokit.rest.packages.getAllPackageVersionsForAPackageOwnedByAnOrg({ package_type, package_name, org })
route: GET /orgs/{org}/packages/{package_type}/{package_name}/versions
scope: packages
type: API method
---

# Get all package versions for a package owned by an organization

**Deprecated:** This method has been renamed to packages.getAllPackageVersionsForPackageOwnedByOrg

Returns all package versions for a package owned by an organization.

To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
If `package_type` is not `container`, your token must also include the `repo` scope.

```js
octokit.rest.packages.getAllPackageVersionsForAPackageOwnedByAnOrg({
  package_type,
  package_name,
  org,
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
<tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>state</td><td>no</td><td>

The state of the package, either active or deleted.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-an-organization).
