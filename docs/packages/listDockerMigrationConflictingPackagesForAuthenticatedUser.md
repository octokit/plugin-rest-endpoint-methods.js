---
name: Get list of conflicting packages during Docker migration for authenticated-user
example: octokit.rest.packages.listDockerMigrationConflictingPackagesForAuthenticatedUser()
route: GET /user/docker/conflicts
scope: packages
type: API method
---

# Get list of conflicting packages during Docker migration for authenticated-user

Lists all packages that are owned by the authenticated user within the user's namespace, and that encountered a conflict during a Docker migration.

OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint.

```js
octokit.rest.packages.listDockerMigrationConflictingPackagesForAuthenticatedUser();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/packages/packages#get-list-of-conflicting-packages-during-docker-migration-for-authenticated-user).
