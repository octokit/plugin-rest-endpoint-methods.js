---
name: Get the license for a repository
example: octokit.licenses.getForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/license
scope: licenses
type: API method
---

# Get the license for a repository

This method returns the contents of the repository's license file, if one is detected.

Similar to [Get repository content](https://docs.github.com/rest/reference/repos/contents#get-repository-content), this method also supports [custom media types](https://docs.github.com/rest/overview/media-types) for retrieving the raw license content or rendered license HTML.

```js
octokit.licenses.getForRepo({
  owner,
  repo
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/licenses/#get-the-license-for-a-repository).
