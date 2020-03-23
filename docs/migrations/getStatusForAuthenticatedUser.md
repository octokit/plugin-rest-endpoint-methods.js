# Get the status of a user migration

Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:

- `pending` - the migration hasn't started yet.
- `exporting` - the migration is in progress.
- `exported` - the migration finished successfully.
- `failed` - the migration failed.

Once the migration has been `exported` you can [download the migration archive](https://developer.github.com/v3/migrations/users/#download-a-user-migration-archive).

```js
octokit.migrations.getStatusForAuthenticatedUser({
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

migration_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
