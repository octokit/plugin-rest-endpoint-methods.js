---
name: Check if a gist is starred
example: octokit.gists.checkIsStarred({ gist_id })
route: GET /gists/{gist_id}/star
scope: gists
type: API method
---

# Check if a gist is starred

```js
octokit.gists.checkIsStarred({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/gists/#check-if-a-gist-is-starred).
