---
name: Get a gist revision
example: octokit.rest.gists.getRevision({ gist_id, sha })
route: GET /gists/{gist_id}/{sha}
scope: gists
type: API method
---

# Get a gist revision

```js
octokit.rest.gists.getRevision({
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

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/gists#get-a-gist-revision).
