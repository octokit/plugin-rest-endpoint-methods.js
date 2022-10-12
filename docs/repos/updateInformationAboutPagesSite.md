---
name: Update information about a GitHub Enterprise Cloud Pages site
example: octokit.rest.repos.updateInformationAboutPagesSite({ owner, repo })
route: PUT /repos/{owner}/{repo}/pages
scope: repos
type: API method
---

# Update information about a GitHub Enterprise Cloud Pages site

Updates information for a GitHub Enterprise Cloud Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).

```js
octokit.rest.repos.updateInformationAboutPagesSite({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>cname</td><td>no</td><td>

Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/articles/using-a-custom-domain-with-github-pages/)."

</td></tr>
<tr><td>https_enforced</td><td>no</td><td>

Specify whether HTTPS should be enforced for the repository.

</td></tr>
<tr><td>public</td><td>no</td><td>

Configures access controls for the GitHub Pages site. If public is set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site. This includes anyone in your Enterprise if the repository is set to `internal` visibility. This feature is only available to repositories in an organization on an Enterprise plan.

</td></tr>
<tr><td>build_type</td><td>no</td><td>

The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.

</td></tr>
<tr><td>source</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/pages#update-information-about-a-github-pages-site).
