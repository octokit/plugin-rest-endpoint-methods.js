---
name: Get a repository README for a directory
example: octokit.rest.repos.getReadmeInDirectory({ owner, repo, dir })
route: GET /repos/{owner}/{repo}/readme/{dir}
scope: repos
type: API method
---

# Get a repository README for a directory

Gets the README from a repository directory.

READMEs support [custom media types](https://docs.github.com/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.

```js
octokit.rest.repos.getReadmeInDirectory({
  owner,
  repo,
  dir,
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
<tr><td>dir</td><td>yes</td><td>

The alternate path to look for a README file

</td></tr>
<tr><td>ref</td><td>no</td><td>

The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#get-a-repository-directory-readme).
