---
name: Delete a gist
example: octokit.rest.gists.delete({ gist_id })
route: DELETE /gists/{gist_id}
scope: gists
type: API method
---

# Delete a gist

```js
octokit.rest.gists.delete({
  gist_id,
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
    <tr><td>gist_id</td><td>yes</td><td>

gist_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/gists#delete-a-gist).
