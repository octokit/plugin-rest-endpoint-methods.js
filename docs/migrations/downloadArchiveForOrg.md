---
name: Download an organization migration archive
example: octokit.rest.migrations.downloadArchiveForOrg({ org, migration_id })
route: GET /orgs/{org}/migrations/{migration_id}/archive
scope: migrations
type: API method
---

# Download an organization migration archive

Fetches the URL to a migration archive.

```js
octokit.rest.migrations.downloadArchiveForOrg({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/migrations/orgs#download-an-organization-migration-archive).
