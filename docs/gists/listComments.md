---
name: List gist comments
example: octokit.gists.listComments({ gist_id })
route: GET /gists/{gist_id}/comments
scope: gists
type: API method
---

# List gist comments

```js
octokit.gists.listComments({
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/gists/comments/#list-gist-comments).
