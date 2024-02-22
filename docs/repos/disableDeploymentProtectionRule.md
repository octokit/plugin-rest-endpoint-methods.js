---
name: Disable a custom protection rule for an environment
example: octokit.rest.repos.disableDeploymentProtectionRule({ environment_name, repo, owner, protection_rule_id })
route: DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}
scope: repos
type: API method
---

# Disable a custom protection rule for an environment

Disables a custom deployment protection rule for an environment.

The authenticated user must have admin or owner permissions to the repository to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.repos.disableDeploymentProtectionRule({
  environment_name,
  repo,
  owner,
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
    <tr><td>environment_name</td><td>yes</td><td>

The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>protection_rule_id</td><td>yes</td><td>

The unique identifier of the protection rule.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/deployments/protection-rules#disable-a-custom-protection-rule-for-an-environment).
