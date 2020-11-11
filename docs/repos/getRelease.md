---
name: Get a release
example: octokit.repos.getRelease({ owner, repo, release_id })
route: GET /repos/{owner}/{repo}/releases/{release_id}
scope: repos
type: API method
---

# Get a release

**Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia).

```js
octokit.repos.getRelease({
  owner,
  repo,
  release_id
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

release_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#get-a-release).
