---
name: List project cards
example: octokit.projects.listCards({ column_id })
route: GET /projects/columns/{column_id}/cards
scope: projects
type: API method
---

# List project cards

```js
octokit.projects.listCards({
  column_id,
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
    <tr><td>column_id</td><td>yes</td><td>

column_id parameter

</td></tr>
<tr><td>archived_state</td><td>no</td><td>

Filters the project cards that are returned by the card's state. Can be one of `all`,`archived`, or `not_archived`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/projects/cards/#list-project-cards).
