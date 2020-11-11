---
name: Update information about a GitHub Pages site
example: octokit.repos.updateInformationAboutPagesSite({ owner, repo, source })
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
<tr><td>cname</td><td>no</td><td>

Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)."

</td></tr>
<tr><td>source</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#update-information-about-a-github-pages-site).
