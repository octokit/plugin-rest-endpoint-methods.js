# Enable a Pages site

```js
octokit.repos.enablePagesSite({
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
<tr><td>source</td><td>no</td><td>

source parameter

</td></tr>
<tr><td>source.branch</td><td>no</td><td>

The repository branch used to publish your [site's source files](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/). Can be either `master` or `gh-pages`.

</td></tr>
<tr><td>source.path</td><td>no</td><td>

The repository directory that includes the source files for the Pages site. When `branch` is `master`, you can change `path` to `/docs`. When `branch` is `gh-pages`, you are unable to specify a `path` other than `/`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
