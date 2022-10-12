---
name: List repositories for a user migration
example: octokit.rest.migrations.listReposForAuthenticatedUser({ migration_id })
route: GET /user/migrations/{migration_id}/repositories
scope: migrations
type: API method
---

# List repositories for a user migration

Lists all the repositories for this user migration.

```js
octokit.rest.migrations.listReposForAuthenticatedUser({
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
    <tr><td>migration_id</td><td>yes</td><td>

The unique identifier of the migration.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/migrations#list-repositories-for-a-user-migration).
