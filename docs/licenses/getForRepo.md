---
name: Get the license for a repository
example: octokit.rest.licenses.getForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/license
scope: licenses
type: API method
---

# Get the license for a repository

This method returns the contents of the repository's license file, if one is detected.

Similar to [Get repository content](https://docs.github.com/enterprise-cloud@latest//rest/reference/repos#get-repository-content), this method also supports [custom media types](https://docs.github.com/enterprise-cloud@latest//rest/overview/media-types) for retrieving the raw license content or rendered license HTML.

```js
octokit.rest.licenses.getForRepo({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/licenses/#get-the-license-for-a-repository).
