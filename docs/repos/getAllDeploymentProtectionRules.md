---
name: Get all deployment protection rules for an environment
example: octokit.rest.repos.getAllDeploymentProtectionRules({ environment_name, repo, owner })
route: GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules
scope: repos
type: API method
---

# Get all deployment protection rules for an environment

Gets all custom deployment protection rules that are enabled for an environment. Anyone with read access to the repository can use this endpoint. For more information about environments, see "[Using environments for deployment](https://docs.github.com/actions/deployment/targeting-different-environments/using-environments-for-deployment)."

For more information about the app that is providing this custom deployment rule, see the [documentation for the `GET /apps/{app_slug}` endpoint](https://docs.github.com/rest/apps/apps#get-an-app).

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```js
octokit.rest.repos.getAllDeploymentProtectionRules({
  environment_name,
  repo,
  owner,
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
    <tr><td>environment_name</td><td>yes</td><td>

The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/deployments/protection-rules#get-all-deployment-protection-rules-for-an-environment).
