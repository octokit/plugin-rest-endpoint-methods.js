# Start a user migration

Initiates the generation of a user migration archive.

```js
octokit.migrations.startForAuthenticatedUser({
  repositories
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
    <tr><td>repositories</td><td>yes</td><td>

An array of repositories to include in the migration.

</td></tr>
<tr><td>lock_repositories</td><td>no</td><td>

Locks the `repositories` to prevent changes during the migration when set to `true`.

</td></tr>
<tr><td>exclude_attachments</td><td>no</td><td>

Does not include attachments uploaded to GitHub.com in the migration data when set to `true`. Excluding attachments will reduce the migration archive file size.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
