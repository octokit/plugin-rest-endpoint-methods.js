---
name: List organization migrations
example: octokit.rest.migrations.listForOrg({ org })
route: GET /orgs/{org}/migrations
scope: migrations
type: API method
---

# List organization migrations

Lists the most recent migrations.

```js
octokit.rest.migrations.listForOrg({
  org,
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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>exclude</td><td>no</td><td>

Exclude attributes from the API response to improve performance

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/migrations#list-organization-migrations).
