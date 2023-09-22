---
name: Get list of conflicting packages during Docker migration for user
example: octokit.rest.packages.listDockerMigrationConflictingPackagesForUser({ username })
route: GET /users/{username}/docker/conflicts
scope: packages
type: API method
---

# Get list of conflicting packages during Docker migration for user

Lists all packages that are in a specific user's namespace, that the requesting user has access to, and that encountered a conflict during Docker migration.
To use this endpoint, you must authenticate using an access token with the `read:packages` scope.

```js
octokit.rest.packages.listDockerMigrationConflictingPackagesForUser({
  username,
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
    <tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/packages/packages#get-list-of-conflicting-packages-during-docker-migration-for-user).
