---
name: Get the contents of a repository's license
example: octokit.licenses.getForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/license
scope: licenses
type: API method
---

# Get the contents of a repository's license

This method returns the contents of the repository's license file, if one is detected.

Similar to [the repository contents API](https://developer.github.com/v3/repos/contents/#get-contents), this method also supports [custom media types](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw license content or rendered license HTML.

```js
octokit.licenses.getForRepo({
  owner,
  repo,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/licenses/#get-the-contents-of-a-repositorys-license).
