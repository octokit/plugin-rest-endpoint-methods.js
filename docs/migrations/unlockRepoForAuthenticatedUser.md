---
name: Unlock a user repository
example: octokit.migrations.unlockRepoForAuthenticatedUser({ migration_id, repo_name })
route: DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock
scope: migrations
type: API method
---

# Unlock a user repository

Unlocks a repository. You can lock repositories when you [start a user migration](https://docs.github.com/rest/reference/migrations#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://docs.github.com/rest/reference/repos#delete-a-repository) if you no longer need the source data. Returns a status of `404 Not Found` if the repository is not locked.

```js
octokit.migrations.unlockRepoForAuthenticatedUser({
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
    <tr><td>migration_id</td><td>yes</td><td>

migration_id parameter

</td></tr>
<tr><td>repo_name</td><td>yes</td><td>

repo_name parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#unlock-a-user-repository).
