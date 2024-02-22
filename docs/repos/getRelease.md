---
name: Get a release
example: octokit.rest.repos.getRelease({ owner, repo, release_id })
route: GET /repos/{owner}/{repo}/releases/{release_id}
scope: repos
type: API method
---

# Get a release

Gets a public release with the specified release ID.

**Note:** This returns an `upload_url` key corresponding to the endpoint
for uploading release assets. This key is a hypermedia resource. For more information, see
"[Getting started with the REST API](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#hypermedia)."

```js
octokit.rest.repos.getRelease({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>release_id</td><td>yes</td><td>

The unique identifier of the release.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/releases/releases#get-a-release).
