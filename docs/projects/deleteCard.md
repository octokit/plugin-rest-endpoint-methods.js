---
name: Delete a project card
example: octokit.projects.deleteCard({ card_id })
route: DELETE /projects/columns/cards/{card_id}
scope: projects
type: API method
---

# Delete a project card

```js
octokit.projects.deleteCard({
  card_id
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/projects#delete-a-project-card).
