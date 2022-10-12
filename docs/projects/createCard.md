---
name: Create a project card
example: octokit.rest.projects.createCard({ column_id, note, content_id, content_type })
route: POST /projects/columns/{column_id}/cards
scope: projects
type: API method
---

# Create a project card

```js
octokit.rest.projects.createCard({
  column_id,
  note,
  content_id,
  content_type,
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
<tr><td>note</td><td>yes</td><td>

The project card's note

</td></tr>
<tr><td>content_id</td><td>yes</td><td>

The unique identifier of the content associated with the card

</td></tr>
<tr><td>content_type</td><td>yes</td><td>

The piece of content associated with the card

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/projects#create-a-project-card).
