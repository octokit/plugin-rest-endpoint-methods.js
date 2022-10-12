---
name: Delete a release
example: octokit.rest.repos.deleteRelease({ owner, repo, release_id })
route: DELETE /repos/{owner}/{repo}/releases/{release_id}
scope: repos
type: API method
---

# Delete a release

Users with push access to the repository can delete a release.

```js
octokit.rest.repos.deleteRelease({
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>release_id</td><td>yes</td><td>

The unique identifier of the release.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/repos#delete-a-release).
