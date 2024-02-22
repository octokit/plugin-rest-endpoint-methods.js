---
name: List repositories for a user migration
example: octokit.rest.migrations.listReposForUser({ migration_id })
route: GET /user/migrations/{migration_id}/repositories
scope: migrations
type: API method
---

# List repositories for a user migration

**Deprecated:** This method has been renamed to migrations.listReposForAuthenticatedUser

Lists all the repositories for this user migration.

```js
octokit.rest.migrations.listReposForUser({
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

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/migrations/users#list-repositories-for-a-user-migration).
