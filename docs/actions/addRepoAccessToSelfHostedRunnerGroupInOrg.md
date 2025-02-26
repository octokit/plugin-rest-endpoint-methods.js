---
name: Add repository access to a self-hosted runner group in an organization
example: octokit.rest.actions.addRepoAccessToSelfHostedRunnerGroupInOrg({ org, runner_group_id, repository_id })
route: PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}
scope: actions
type: API method
---

# Add repository access to a self-hosted runner group in an organization

Adds a repository to the list of repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."

OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.actions.addRepoAccessToSelfHostedRunnerGroupInOrg({
  org,
  runner_group_id,
  repository_id,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>runner_group_id</td><td>yes</td><td>

Unique identifier of the self-hosted runner group.

</td></tr>
<tr><td>repository_id</td><td>yes</td><td>

The unique identifier of the repository.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/self-hosted-runner-groups#add-repository-access-to-a-self-hosted-runner-group-in-an-organization).
