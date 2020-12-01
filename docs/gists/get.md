---
name: Get a gist
example: octokit.gists.get({ gist_id })
route: GET /gists/{gist_id}
scope: gists
type: API method
---

# Get a gist

```js
octokit.gists.get({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/gists/#get-a-gist).
