---
name: Create a custom deployment protection rule on an environment
example: octokit.rest.repos.createDeploymentProtectionRule({ environment_name, repo, owner })
route: POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules
scope: repos
type: API method
---

# Create a custom deployment protection rule on an environment

Enable a custom deployment protection rule for an environment.

You must authenticate using an access token with the `repo` scope to use this endpoint. Enabling a custom protection rule requires admin or owner permissions to the repository. GitHub Apps must have the `actions:write` permission to use this endpoint.

For more information about the app that is providing this custom deployment rule, see the [documentation for the `GET /apps/{app_slug}` endpoint](https://docs.github.com/rest/apps/apps#get-an-app).

```js
octokit.rest.repos.createDeploymentProtectionRule({
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

The name of the environment.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>integration_id</td><td>no</td><td>

The ID of the custom app that will be enabled on the environment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/deployments/protection-rules#create-a-custom-deployment-protection-rule-on-an-environment).
