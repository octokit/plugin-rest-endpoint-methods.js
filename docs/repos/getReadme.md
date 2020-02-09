# Get the README

Gets the preferred README for a repository.

READMEs support [custom media types](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw content or rendered HTML.

```js
octokit.repos.getReadme(owner, repo);
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
<tr><td>ref</td><td>no</td><td>

The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
