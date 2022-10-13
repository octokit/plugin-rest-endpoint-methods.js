---
name: Fork a gist
example: octokit.rest.gists.fork({ gist_id })
route: POST /gists/{gist_id}/forks
scope: gists
type: API method
---

# Fork a gist

```js
octokit.rest.gists.fork({
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

The unique identifier of the gist.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/gists#fork-a-gist).
