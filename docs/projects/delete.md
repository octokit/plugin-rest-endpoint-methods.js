# Delete a project

Deletes a project board. Returns a `404 Not Found` status if projects are disabled.

```js
octokit.projects.delete({
  project_id,
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
    <tr><td>project_id</td><td>yes</td><td>

project_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/projects/#delete-a-project).
