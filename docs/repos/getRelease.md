---
name: Get a single release
example: octokit.repos.getRelease({ owner, repo, release_id })
route: GET /repos/{owner}/{repo}/releases/{release_id}
scope: repos
type: API method
---

# Get a single release

**Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://developer.github.com/v3/#hypermedia).

```js
octokit.repos.getRelease({
  owner,
  repo,
  release_id,
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>release_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/releases/#get-a-single-release).
