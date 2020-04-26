---
name: List user migrations
example: octokit.migrations.listForAuthenticatedUser()
route: GET /user/migrations
scope: migrations
type: API method
---

# List user migrations

Lists all migrations a user has started.

```js
octokit.migrations.listForAuthenticatedUser();
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

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/migrations/users/#list-user-migrations).
