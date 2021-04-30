---
name: List gist commits
example: octokit.rest.gists.listCommits({ gist_id })
route: GET /gists/{gist_id}/commits
scope: gists
type: API method
---

# List gist commits

```js
octokit.rest.gists.listCommits({
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/gists#list-gist-commits).
