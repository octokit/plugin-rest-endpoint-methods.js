---
name: Create a GitHub Pages site
example: octokit.repos.createPagesSite({ owner, repo, source, source.branch })
route: POST /repos/{owner}/{repo}/pages
scope: repos
type: API method
---

# Create a GitHub Pages site

Configures a GitHub Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)."

```js
octokit.repos.createPagesSite({
        owner,
repo,
source,
source.branch
      })
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
<tr><td>source</td><td>yes</td><td>

The source branch and directory used to publish your Pages site.

</td></tr>
<tr><td>source.branch</td><td>yes</td><td>

The repository branch used to publish your site's source files.

</td></tr>
<tr><td>source.path</td><td>no</td><td>

The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`. Default: `/`

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/pages/#create-a-github-pages-site).
