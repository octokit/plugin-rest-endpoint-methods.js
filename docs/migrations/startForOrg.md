---
name: Start an organization migration
example: octokit.rest.migrations.startForOrg({ org, repositories })
route: POST /orgs/{org}/migrations
scope: migrations
type: API method
---

# Start an organization migration

Initiates the generation of a migration archive.

```js
octokit.rest.migrations.startForOrg({
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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>repositories</td><td>yes</td><td>

A list of arrays indicating which repositories should be migrated.

</td></tr>
<tr><td>lock_repositories</td><td>no</td><td>

Indicates whether repositories should be locked (to prevent manipulation) while migrating data.

</td></tr>
<tr><td>exclude_metadata</td><td>no</td><td>

Indicates whether metadata should be excluded and only git source should be included for the migration.

</td></tr>
<tr><td>exclude_git_data</td><td>no</td><td>

Indicates whether the repository git data should be excluded from the migration.

</td></tr>
<tr><td>exclude_attachments</td><td>no</td><td>

Indicates whether attachments should be excluded from the migration (to reduce migration archive file size).

</td></tr>
<tr><td>exclude_releases</td><td>no</td><td>

Indicates whether releases should be excluded from the migration (to reduce migration archive file size).

</td></tr>
<tr><td>exclude_owner_projects</td><td>no</td><td>

Indicates whether projects owned by the organization or users should be excluded. from the migration.

</td></tr>
<tr><td>org_metadata_only</td><td>no</td><td>

Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags).

</td></tr>
<tr><td>exclude</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#start-an-organization-migration).
