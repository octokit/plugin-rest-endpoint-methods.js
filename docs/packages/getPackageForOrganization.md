---
name: Get a package for an organization
example: octokit.packages.getPackageForOrganization({ package_type, package_name, org })
route: GET /orgs/{org}/packages/{package_type}/{package_name}
scope: packages
type: API method
---

# Get a package for an organization

Gets a specific package in an organization.

To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
If `package_type` is not `container`, your token must also include the `repo` scope.

```js
octokit.packages.getPackageForOrganization({
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

The type of supported package. Can be one of `npm`, `maven`, `rubygems`, `nuget`, `docker`, or `container`. For Docker images that use the package namespace `https://ghcr.io/owner/package-name`, use `container`.

</td></tr>
<tr><td>package_name</td><td>yes</td><td>

The name of the package.

</td></tr>
<tr><td>org</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/packages#get-a-package-for-an-organization).
