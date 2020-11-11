---
name: Move a project card
example: octokit.projects.moveCard({ card_id, position })
route: POST /projects/columns/cards/{card_id}/moves
scope: projects
type: API method
---

# Move a project card

```js
octokit.projects.moveCard({
  card_id,
  position,
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
    <tr><td>card_id</td><td>yes</td><td>

card_id parameter

</td></tr>
<tr><td>position</td><td>yes</td><td>

The position of the card in a column

</td></tr>
<tr><td>column_id</td><td>no</td><td>

The unique identifier of the column the card should be moved to

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/projects#move-a-project-card).
