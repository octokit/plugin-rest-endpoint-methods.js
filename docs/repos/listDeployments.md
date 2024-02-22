---
name: List deployments
example: octokit.rest.repos.listDeployments({ owner, repo })
route: GET /repos/{owner}/{repo}/deployments
scope: repos
type: API method
---

# List deployments

Simple filtering of deployments is available via query parameters:

```js
octokit.rest.repos.listDeployments({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>sha</td><td>no</td><td>

The SHA recorded at creation time.

</td></tr>
<tr><td>ref</td><td>no</td><td>

The name of the ref. This can be a branch, tag, or SHA.

</td></tr>
<tr><td>task</td><td>no</td><td>

The name of the task for the deployment (e.g., `deploy` or `deploy:migrations`).

</td></tr>
<tr><td>environment</td><td>no</td><td>

The name of the environment that was deployed to (e.g., `staging` or `production`).

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/deployments/deployments#list-deployments).
