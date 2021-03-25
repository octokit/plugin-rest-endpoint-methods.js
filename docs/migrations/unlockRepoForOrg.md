---
name: Unlock an organization repository
example: octokit.rest.migrations.unlockRepoForOrg({ org, migration_id, repo_name })
route: DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock
scope: migrations
type: API method
---

# Unlock an organization repository

Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/rest/reference/repos#delete-a-repository) when the migration is complete and you no longer need the source data.

```js
octokit.rest.migrations.unlockRepoForOrg({
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

</td></tr>
<tr><td>migration_id</td><td>yes</td><td>

migration_id parameter

</td></tr>
<tr><td>repo_name</td><td>yes</td><td>

repo_name parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#unlock-an-organization-repository).
