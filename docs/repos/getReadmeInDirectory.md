---
name: Get a repository README for a directory
example: octokit.rest.repos.getReadmeInDirectory({ owner, repo, dir })
route: GET /repos/{owner}/{repo}/readme/{dir}
scope: repos
type: API method
---

# Get a repository README for a directory

Gets the README from a repository directory.

This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."

- **`application/vnd.github.raw+json`**: Returns the raw file contents. This is the default if you do not specify a media type.
- **`application/vnd.github.html+json`**: Returns the README in HTML. Markup languages are rendered to HTML using GitHub's open-source [Markup library](https://github.com/github/markup).

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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>dir</td><td>yes</td><td>

The alternate path to look for a README file

</td></tr>
<tr><td>ref</td><td>no</td><td>

The name of the commit/branch/tag. Default: the repository’s default branch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/contents#get-a-repository-readme-for-a-directory).
