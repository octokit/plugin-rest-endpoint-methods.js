# Move a project card

```js
octokit.projects.moveCard({
  card_id,
  position
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

Can be one of `top`, `bottom`, or `after:<card_id>`, where `<card_id>` is the `id` value of a card in the same column, or in the new column specified by `column_id`.

</td></tr>
<tr><td>column_id</td><td>no</td><td>

The `id` value of a column in the same project.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
