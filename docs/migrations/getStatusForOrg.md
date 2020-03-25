# Get the status of an organization migration

Fetches the status of a migration.

The `state` of a migration can be one of the following values:

- `pending`, which means the migration hasn't started yet.
- `exporting`, which means the migration is in progress.
- `exported`, which means the migration finished successfully.
- `failed`, which means the migration failed.

```js
octokit.migrations.getStatusForOrg({
  org,
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
    <tr><td>org</td><td>yes</td><td>

org parameter

</td></tr>
<tr><td>migration_id</td><td>yes</td><td>

migration_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/migrations/orgs/#get-the-status-of-an-organization-migration).
