---
name: Get list of conflicting packages during Docker migration for organization
example: octokit.rest.packages.listDockerMigrationConflictingPackagesForOrganization({ org })
route: GET /orgs/{org}/docker/conflicts
scope: packages
type: API method
---

# Get list of conflicting packages during Docker migration for organization

Lists all packages that are in a specific organization, are readable by the requesting user, and that encountered a conflict during a Docker migration.
To use this endpoint, you must authenticate using an access token with the `read:packages` scope.

```js
octokit.rest.packages.listDockerMigrationConflictingPackagesForOrganization({
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/packages/packages#get-list-of-conflicting-packages-during-docker-migration-for-organization).
