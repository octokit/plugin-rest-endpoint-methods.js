---
name: Delete a download
example: octokit.repos.deleteDownload({ owner, repo, download_id })
route: DELETE /repos/{owner}/{repo}/downloads/{download_id}
scope: repos
type: API method
---

# Delete a download

```js
octokit.repos.deleteDownload({
  owner,
  repo,
  download_id,
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
    <tr><td>owner</td><td>yes</td><td>

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>download_id</td><td>yes</td><td>

download_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/downloads/#delete-a-download).
