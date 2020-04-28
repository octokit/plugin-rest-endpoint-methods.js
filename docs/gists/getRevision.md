---
name: Get a specific revision of a gist
example: octokit.gists.getRevision({ gist_id, sha })
route: GET /gists/{gist_id}/{sha}
scope: gists
type: API method
---

# Get a specific revision of a gist

```js
octokit.gists.getRevision({
  gist_id,
  sha,
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
<tr><td>sha</td><td>yes</td><td>

sha parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/gists/#get-a-specific-revision-of-a-gist).
