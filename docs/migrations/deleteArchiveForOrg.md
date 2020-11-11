---
name: Delete an organization migration archive
example: octokit.migrations.deleteArchiveForOrg({ org, migration_id })
route: DELETE /orgs/{org}/migrations/{migration_id}/archive
scope: migrations
type: API method
---

# Delete an organization migration archive

Deletes a previous migration archive. Migration archives are automatically deleted after seven days.

```js
octokit.migrations.deleteArchiveForOrg({
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

migration_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#delete-an-organization-migration-archive).
