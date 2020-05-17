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
  card_id,
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

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/projects/cards/#delete-a-project-card).
