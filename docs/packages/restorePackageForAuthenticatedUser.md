---
name: Restore a package for the authenticated user
example: octokit.rest.packages.restorePackageForAuthenticatedUser({ package_type, package_name })
route: POST /user/packages/{package_type}/{package_name}/restore{?token}
scope: packages
type: API method
---

# Restore a package for the authenticated user

Restores a package owned by the authenticated user.

You can restore a deleted package under the following conditions:

- The package was deleted within the last 30 days.
- The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.

OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```js
octokit.rest.packages.restorePackageForAuthenticatedUser({
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

The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.

</td></tr>
<tr><td>package_name</td><td>yes</td><td>

The name of the package.

</td></tr>
<tr><td>token</td><td>no</td><td>

package token

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/packages/packages#restore-a-package-for-the-authenticated-user).
