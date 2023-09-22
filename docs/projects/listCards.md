---
name: List project cards
example: octokit.rest.projects.listCards({ column_id })
route: GET /projects/columns/{column_id}/cards
scope: projects
type: API method
---

# List project cards

Lists the project cards in a project.

```js
octokit.rest.projects.listCards({
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

The unique identifier of the column.

</td></tr>
<tr><td>archived_state</td><td>no</td><td>

Filters the project cards that are returned by the card's state.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/cards#list-project-cards).
