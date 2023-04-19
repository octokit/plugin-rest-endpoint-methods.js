---
name: Get list of conflicting packages during Docker migration for authenticated-user
example: octokit.rest.packages.listDockerMigrationConflictingPackagesForAuthenticatedUser()
route: GET /user/docker/conflicts
scope: packages
type: API method
---

# Get list of conflicting packages during Docker migration for authenticated-user

Lists all packages that are owned by the authenticated user within the user's namespace, and that encountered a conflict during a Docker migration.
To use this endpoint, you must authenticate using an access token with the `read:packages` scope.

```js
octokit.rest.packages.listDockerMigrationConflictingPackagesForAuthenticatedUser();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/packages#list-docker-migration-conflicting-packages-for-authenticated-user).
