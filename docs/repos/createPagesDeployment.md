---
name: Create a GitHub Pages deployment
example: octokit.rest.repos.createPagesDeployment({ owner, repo, artifact_url, pages_build_version, oidc_token })
route: POST /repos/{owner}/{repo}/pages/deployment
scope: repos
type: API method
---

# Create a GitHub Pages deployment

Create a GitHub Pages deployment for a repository.

Users must have write permissions. GitHub Apps must have the `pages:write` permission to use this endpoint.

```js
octokit.rest.repos.createPagesDeployment({
  owner,
  repo,
  artifact_url,
  pages_build_version,
  oidc_token,
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
<tr><td>artifact_url</td><td>yes</td><td>

The URL of an artifact that contains the .zip or .tar of static assets to deploy. The artifact belongs to the repository.

</td></tr>
<tr><td>environment</td><td>no</td><td>

The target environment for this GitHub Pages deployment.

</td></tr>
<tr><td>pages_build_version</td><td>yes</td><td>

A unique string that represents the version of the build for this deployment.

</td></tr>
<tr><td>oidc_token</td><td>yes</td><td>

The OIDC token issued by GitHub Actions certifying the origin of the deployment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/pages#create-a-github-pages-deployment).
