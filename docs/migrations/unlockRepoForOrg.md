# Unlock an organization repository

Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://developer.github.com/v3/repos/#delete-a-repository) when the migration is complete and you no longer need the source data.

```js
octokit.migrations.unlockRepoForOrg({
  org,
  migration_id,
  repo_name,
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
<tr><td>repo_name</td><td>yes</td><td>

repo_name parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/migrations/orgs/#unlock-an-organization-repository).
