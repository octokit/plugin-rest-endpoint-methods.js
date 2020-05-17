---
name: Fork a gist
example: octokit.gists.fork({ gist_id })
route: POST /gists/{gist_id}/forks
scope: gists
type: API method
---

# Fork a gist

**Note**: This was previously `/gists/:gist_id/fork`.

```js
octokit.gists.fork({
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

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/gists/#fork-a-gist).
