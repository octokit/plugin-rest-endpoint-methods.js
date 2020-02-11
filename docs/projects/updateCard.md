# Update a project card

```js
octokit.projects.updateCard({
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
<tr><td>note</td><td>no</td><td>

The card's note content. Only valid for cards without another type of content, so this cannot be specified if the card already has a `content_id` and `content_type`.

</td></tr>
<tr><td>archived</td><td>no</td><td>

Use `true` to archive a project card. Specify `false` if you need to restore a previously archived project card.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
