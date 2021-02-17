---
name: List repositories in an organization migration
example: octokit.migrations.listReposForOrg({ org, migration_id })
route: GET /orgs/{org}/migrations/{migration_id}/repositories
scope: migrations
type: API method
---

# List repositories in an organization migration

List all the repositories for this organization migration.

```js
octokit.migrations.listReposForOrg({
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#list-repositories-in-an-organization-migration).
