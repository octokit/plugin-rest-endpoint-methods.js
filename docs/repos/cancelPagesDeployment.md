---
name: Cancel a GitHub Pages deployment
example: octokit.rest.repos.cancelPagesDeployment({ owner, repo, pages_deployment_id })
route: POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel
scope: repos
type: API method
---

# Cancel a GitHub Pages deployment

Cancels a GitHub Pages deployment.

The authenticated user must have write permissions for the GitHub Pages site.

```js
octokit.rest.repos.cancelPagesDeployment({
  owner,
  repo,
  pages_deployment_id,
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
<tr><td>pages_deployment_id</td><td>yes</td><td>

The ID of the Pages deployment. You can also give the commit SHA of the deployment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/pages/pages#cancel-a-github-pages-deployment).
