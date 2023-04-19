---
name: Get an organization migration status
example: octokit.rest.migrations.getStatusForOrg({ org, migration_id })
route: GET /orgs/{org}/migrations/{migration_id}
scope: migrations
type: API method
---

# Get an organization migration status

Fetches the status of a migration.

The `state` of a migration can be one of the following values:

- `pending`, which means the migration hasn't started yet.
- `exporting`, which means the migration is in progress.
- `exported`, which means the migration finished successfully.
- `failed`, which means the migration failed.

```js
octokit.rest.migrations.getStatusForOrg({
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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>migration_id</td><td>yes</td><td>

The unique identifier of the migration.

</td></tr>
<tr><td>exclude</td><td>no</td><td>

Exclude attributes from the API response to improve performance

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/migrations/orgs#get-an-organization-migration-status).
