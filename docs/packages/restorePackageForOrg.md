---
name: Restore a package for an organization
example: octokit.rest.packages.restorePackageForOrg({ package_type, package_name, org })
route: POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}
scope: packages
type: API method
---

# Restore a package for an organization

Restores an entire package in an organization.

You can restore a deleted package under the following conditions:

- The package was deleted within the last 30 days.
- The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.

To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:write` scopes. In addition:

- If `package_type` is not `container`, your token must also include the `repo` scope.
- If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.

```js
octokit.rest.packages.restorePackageForOrg({
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

The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.

</td></tr>
<tr><td>package_name</td><td>yes</td><td>

The name of the package.

</td></tr>
<tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>token</td><td>no</td><td>

package token

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/packages#restore-a-package-for-an-organization).
