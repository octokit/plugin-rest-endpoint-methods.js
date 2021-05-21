---
name: List teams
example: octokit.rest.teams.list({ org })
route: GET /orgs/{org}/teams
scope: teams
type: API method
---

# List teams

Lists all teams in an organization that are visible to the authenticated user.

```js
octokit.rest.teams.list({
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

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/teams#list-teams).
