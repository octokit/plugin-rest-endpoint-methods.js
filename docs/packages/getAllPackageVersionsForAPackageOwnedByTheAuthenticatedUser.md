---
name: List package versions for a package owned by the authenticated user
example: octokit.rest.packages.getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser({ package_type, package_name })
route: GET /user/packages/{package_type}/{package_name}/versions
scope: packages
type: API method
---

# List package versions for a package owned by the authenticated user

**Deprecated:** This method has been renamed to packages.getAllPackageVersionsForPackageOwnedByAuthenticatedUser

Lists package versions for a package owned by the authenticated user.

To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```js
octokit.rest.packages.getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser(
  {
    package_type,
    package_name,
  }
);
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
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>state</td><td>no</td><td>

The state of the package, either active or deleted.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user).
