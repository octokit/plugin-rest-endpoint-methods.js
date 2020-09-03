---
name: Update information about a GitHub Pages site
example: octokit.repos.updateInformationAboutPagesSite({ owner, repo, source, source.branch, source.path })
route: PUT /repos/{owner}/{repo}/pages
scope: repos
type: API method
---

# Update information about a GitHub Pages site

Updates information for a GitHub Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).

```js
octokit.repos.updateInformationAboutPagesSite({
        owner,
repo,
source,
source.branch,
source.path
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
<tr><td>cname</td><td>no</td><td>

Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/articles/using-a-custom-domain-with-github-pages/)."

</td></tr>
<tr><td>source</td><td>yes</td><td>

Update the source for the repository. Must include the branch name and path.

</td></tr>
<tr><td>source.branch</td><td>yes</td><td>

The repository branch used to publish your site's source files.

</td></tr>
<tr><td>source.path</td><td>yes</td><td>

The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/pages/#update-information-about-a-github-pages-site).
