---
name: Check if a gist is starred
example: octokit.rest.gists.checkIsStarred({ gist_id })
route: GET /gists/{gist_id}/star
scope: gists
type: API method
---

# Check if a gist is starred

```js
octokit.rest.gists.checkIsStarred({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/gists#check-if-a-gist-is-starred).
