---
name: Get a repository README
example: octokit.repos.getReadme({ owner, repo })
route: GET /repos/{owner}/{repo}/readme
scope: repos
type: API method
---

# Get a repository README

Gets the preferred README for a repository.

READMEs support [custom media types](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw content or rendered HTML.

```js
octokit.repos.getReadme({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>ref</td><td>no</td><td>

The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/contents/#get-a-repository-readme).
