---
name: Download an organization migration archive
example: octokit.migrations.downloadArchiveForOrg({ org, migration_id })
route: GET /orgs/{org}/migrations/{migration_id}/archive
scope: migrations
type: API method
---

# Download an organization migration archive

Fetches the URL to a migration archive.

```js
octokit.migrations.downloadArchiveForOrg({
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

</td></tr>
<tr><td>migration_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/migrations/orgs/#download-an-organization-migration-archive).
