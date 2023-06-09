---
name: Get a custom deployment protection rule
example: octokit.rest.repos.getCustomDeploymentProtectionRule({ owner, repo, environment_name, protection_rule_id })
route: GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}
scope: repos
type: API method
---

# Get a custom deployment protection rule

Gets an enabled custom deployment protection rule for an environment. Anyone with read access to the repository can use this endpoint. If the repository is private and you want to use a personal access token (classic), you must use an access token with the `repo` scope. GitHub Apps and fine-grained personal access tokens must have the `actions:read` permission to use this endpoint. For more information about environments, see "[Using environments for deployment](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)."

For more information about the app that is providing this custom deployment rule, see [`GET /apps/{app_slug}`](https://docs.github.com/rest/apps/apps#get-an-app).

```js
octokit.rest.repos.getCustomDeploymentProtectionRule({
  owner,
  repo,
  environment_name,
  protection_rule_id,
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
<tr><td>environment_name</td><td>yes</td><td>

The name of the environment.

</td></tr>
<tr><td>protection_rule_id</td><td>yes</td><td>

The unique identifier of the protection rule.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/deployments/protection-rules#get-a-deployment-protection-rule).
