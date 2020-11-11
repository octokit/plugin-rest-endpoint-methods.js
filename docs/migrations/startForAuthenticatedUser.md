---
name: Start a user migration
example: octokit.migrations.startForAuthenticatedUser({ repositories })
route: POST /user/migrations
scope: migrations
type: API method
---

# Start a user migration

Initiates the generation of a user migration archive.

```js
octokit.migrations.startForAuthenticatedUser({
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
    <tr><td>lock_repositories</td><td>no</td><td>

Lock the repositories being migrated at the start of the migration

</td></tr>
<tr><td>exclude_attachments</td><td>no</td><td>

Do not include attachments in the migration

</td></tr>
<tr><td>exclude</td><td>no</td><td>

Exclude attributes from the API response to improve performance

</td></tr>
<tr><td>repositories</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#start-a-user-migration).
