---
name: Delete package version for an organization
example: octokit.rest.packages.deletePackageVersionForOrg({ package_type, package_name, org, package_version_id })
route: DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}
scope: packages
type: API method
---

# Delete package version for an organization

Deletes a specific package version in an organization. If the package is public and the package version has more than 25 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.

To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope. In addition:

- If `package_type` is not `container`, your token must also include the `repo` scope.
- If `package_type` is `container`, you must also have admin permissions to the container you want to delete.

```js
octokit.rest.packages.deletePackageVersionForOrg({
  package_type,
  package_name,
  org,
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
<tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>package_version_id</td><td>yes</td><td>

Unique identifier of the package version.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/packages#delete-a-package-version-for-an-organization).
