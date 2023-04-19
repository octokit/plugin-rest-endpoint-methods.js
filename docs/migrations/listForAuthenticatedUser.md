---
name: List user migrations
example: octokit.rest.migrations.listForAuthenticatedUser()
route: GET /user/migrations
scope: migrations
type: API method
---

# List user migrations

Lists all migrations a user has started.

```js
octokit.rest.migrations.listForAuthenticatedUser();
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
    <tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/migrations/users#list-user-migrations).
