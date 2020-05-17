---
name: Star a gist
example: octokit.gists.star({ gist_id })
route: PUT /gists/{gist_id}/star
scope: gists
type: API method
---

# Star a gist

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

```js
octokit.gists.star({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/gists/#star-a-gist).
