---
name: Create a GitHub Enterprise Cloud Pages site
example: octokit.rest.repos.createPagesSite({ owner, repo, source.branch })
route: POST /repos/{owner}/{repo}/pages
scope: repos
type: API method
---

# Create a GitHub Enterprise Cloud Pages site

Configures a GitHub Enterprise Cloud Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)."

```js
octokit.rest.repos.createPagesSite({
        owner,
repo,
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>build_type</td><td>no</td><td>

The process in which the Page will be built. Possible values are `"legacy"` and `"workflow"`.

</td></tr>
<tr><td>source</td><td>no</td><td>

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/pages#create-a-github-pages-site).
