---
name: Start an organization migration
example: octokit.migrations.startForOrg({ org, repositories })
route: POST /orgs/{org}/migrations
scope: migrations
type: API method
---

# Start an organization migration

Initiates the generation of a migration archive.

```js
octokit.migrations.startForOrg({
  org,
  repositories,
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
<tr><td>repositories</td><td>yes</td><td>

A list of arrays indicating which repositories should be migrated.

</td></tr>
<tr><td>lock_repositories</td><td>no</td><td>

Indicates whether repositories should be locked (to prevent manipulation) while migrating data.

</td></tr>
<tr><td>exclude_attachments</td><td>no</td><td>

Indicates whether attachments should be excluded from the migration (to reduce migration archive file size).

</td></tr>
<tr><td>exclude</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#start-an-organization-migration).
