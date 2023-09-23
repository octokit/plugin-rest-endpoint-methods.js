---
name: Get a project card
example: octokit.rest.projects.getCard({ card_id })
route: GET /projects/columns/cards/{card_id}
scope: projects
type: API method
---

# Get a project card

Gets information about a project card.

```js
octokit.rest.projects.getCard({
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

The unique identifier of the card.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/cards#get-a-project-card).
