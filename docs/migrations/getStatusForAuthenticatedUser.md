---
name: Get a user migration status
example: octokit.migrations.getStatusForAuthenticatedUser({ migration_id })
route: GET /user/migrations/{migration_id}
scope: migrations
type: API method
---

# Get a user migration status

Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:

- `pending` - the migration hasn't started yet.
- `exporting` - the migration is in progress.
- `exported` - the migration finished successfully.
- `failed` - the migration failed.

Once the migration has been `exported` you can [download the migration archive](https://docs.github.com/rest/reference/migrations#download-a-user-migration-archive).

```js
octokit.migrations.getStatusForAuthenticatedUser({
  migration_id
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

migration_id parameter

</td></tr>
<tr><td>exclude</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#get-a-user-migration-status).
