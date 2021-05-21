---
name: Unstar a gist
example: octokit.rest.gists.unstar({ gist_id })
route: DELETE /gists/{gist_id}/star
scope: gists
type: API method
---

# Unstar a gist

```js
octokit.rest.gists.unstar({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/gists#unstar-a-gist).
