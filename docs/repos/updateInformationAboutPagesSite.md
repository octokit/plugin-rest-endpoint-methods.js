# Update information about a Pages site

```js
octokit.repos.updateInformationAboutPagesSite(owner, repo);
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
<tr><td>cname</td><td>no</td><td>

Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)."

</td></tr>
<tr><td>source</td><td>no</td><td>

Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
