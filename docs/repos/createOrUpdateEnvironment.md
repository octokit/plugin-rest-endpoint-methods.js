---
name: Create or update an environment
example: octokit.rest.repos.createOrUpdateEnvironment({ owner, repo, environment_name, deployment_branch_policy.protected_branches, deployment_branch_policy.custom_branch_policies })
route: PUT /repos/{owner}/{repo}/environments/{environment_name}
scope: repos
type: API method
---

# Create or update an environment

Create or update an environment with protection rules, such as required reviewers. For more information about environment protection rules, see "[Environments](/actions/reference/environments#environment-protection-rules)."

**Note:** To create or update name patterns that branches must match in order to deploy to this environment, see "[Deployment branch policies](/rest/deployments/branch-policies)."

**Note:** To create or update secrets for an environment, see "[Secrets](/rest/reference/actions#secrets)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.

```js
octokit.rest.repos.createOrUpdateEnvironment({
        owner,
repo,
environment_name,
deployment_branch_policy.protected_branches,
deployment_branch_policy.custom_branch_policies
      })
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
<tr><td>environment_name</td><td>yes</td><td>

The name of the environment.

</td></tr>
<tr><td>wait_timer</td><td>no</td><td>

The amount of time to delay a job after the job is initially triggered. The time (in minutes) must be an integer between 0 and 43,200 (30 days).

</td></tr>
<tr><td>reviewers</td><td>no</td><td>

The people or teams that may review jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.

</td></tr>
<tr><td>reviewers[].type</td><td>no</td><td>

The type of reviewer.

</td></tr>
<tr><td>reviewers[].id</td><td>no</td><td>

The id of the user or team who can review the deployment

</td></tr>
<tr><td>deployment_branch_policy</td><td>no</td><td>

The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.

</td></tr>
<tr><td>deployment_branch_policy.protected_branches</td><td>yes</td><td>

Whether only branches with branch protection rules can deploy to this environment. If `protected_branches` is `true`, `custom_branch_policies` must be `false`; if `protected_branches` is `false`, `custom_branch_policies` must be `true`.

</td></tr>
<tr><td>deployment_branch_policy.custom_branch_policies</td><td>yes</td><td>

Whether only branches that match the specified name patterns can deploy to this environment. If `custom_branch_policies` is `true`, `protected_branches` must be `false`; if `custom_branch_policies` is `false`, `protected_branches` must be `true`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#create-or-update-an-environment).
