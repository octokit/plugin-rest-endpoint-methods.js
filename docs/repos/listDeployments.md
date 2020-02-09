# List deployments

Simple filtering of deployments is available via query parameters:

```js
octokit.repos.listDeployments(owner, repo);
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

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
