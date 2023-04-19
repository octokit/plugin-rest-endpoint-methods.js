---
name: Delete a user migration archive
example: octokit.rest.migrations.deleteArchiveForAuthenticatedUser({ migration_id })
route: DELETE /user/migrations/{migration_id}/archive
scope: migrations
type: API method
---

# Delete a user migration archive

Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://docs.github.com/rest/migrations/users#list-user-migrations) and [Get a user migration status](https://docs.github.com/rest/migrations/users#get-a-user-migration-status) endpoints, will continue to be available even after an archive is deleted.

```js
octokit.rest.migrations.deleteArchiveForAuthenticatedUser({
  migration_id,
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
    <tr><td>migration_id</td><td>yes</td><td>

The unique identifier of the migration.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/migrations/users#delete-a-user-migration-archive).
