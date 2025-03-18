---
name: Update an existing project card
example: octokit.rest.projects.updateCard({ card_id })
route: PATCH /projects/columns/cards/{card_id}
scope: projects
type: API method
---

# Update an existing project card

**This method is deprecated.**

> [!WARNING] > **Closing down notice:** Projects (classic) is being deprecated in favor of the new Projects experience.
> See the [changelog](https://github.blog/changelog/2024-05-23-sunset-notice-projects-classic/) for more information.

```js
octokit.rest.projects.updateCard({
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
<tr><td>note</td><td>no</td><td>

The project card's note

</td></tr>
<tr><td>archived</td><td>no</td><td>

Whether or not the card is archived

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/cards#update-an-existing-project-card).
